import { model, Model, Schema } from 'mongoose';

// Helpers
import { handleError } from '@server/helpers';

// Interfaces
import type { IRegion, IRegionCompact } from '@interfaces';

// Modal Interface
interface RegionModel extends Model<IRegion> {
    getName(regionID: string): Promise<string | null>;
    getShortlist(): Promise<IRegionCompact[] | null>;
}

// Schema
const RegionSchema = new Schema<IRegion, RegionModel>(
    {
        regionID: {
            type: String,
            required: true,
            immutable: true,
            unique: true,
        },
        name: { type: String, required: true, immutable: true },
        isActive: { type: Boolean, default: false },
        serial: { type: Number, default: 0 },
    },
    {
        timestamps: false,
    }
);

// Statics
RegionSchema.statics.getName = async function (
    regionID: string
): Promise<string | null> {
    try {
        const region = await this.findOne({ regionID });

        if (!region) return null;

        return region.name;
    } catch (error) {
        const { message } = error as Error;

        handleError('Model Regions Static Get Name', message);

        return null;
    }
};
RegionSchema.statics.getShortlist = async function () {
    try {
        const regions = await this.find().select('-isActive');

        const result = [...regions].map((item) => {
            const { _id, ...result } = item.toObject();

            return {
                ...result,
                id: _id.toString(),
            };
        });

        return result;
    } catch (error) {
        const { message } = error as Error;

        handleError('Model Regions Static Get Shortlist', message);

        return null;
    }
};

// Model
const Index = model<IRegion, RegionModel>('Regions', RegionSchema);

export default Index;
