import { model, Model, Schema } from 'mongoose';

// Helpers
import { handleError, getPages, convertToEnglish } from '@server/helpers';

// Models
import { InvestorsModel } from '@server/models';

// Interfaces
import type {
    IInvestor,
    IProject,
    IProjectCompactForApp,
    IProjectInfoForApp,
    IResultGetShortlistForApp,
} from '@interfaces';

// Model Interface
interface ProjectModel extends Model<IProject> {
    getShortlistForApp(
        page: number,
        region: string,
        id?: string
    ): Promise<IResultGetShortlistForApp | null>;
    getInfoForApp(projectID: number): Promise<IProjectInfoForApp | null>;
}

// Schema
const ProjectSchema = new Schema<IProject, ProjectModel>(
    {
        projectID: {
            type: Number,
            required: true,
            immutable: true,
            unique: true,
        },
        title: { type: String, required: true },
        content: { type: String, required: true },
        acreages: { type: String, required: true },
        prices: { type: Schema.Types.Mixed, required: true },
        location: {
            type: {
                region: { type: String, required: true },
                district: { type: String, required: true },
                ward: { type: String, required: true },
                address: { type: String, required: true },
                coordinate: {
                    type: {
                        latitude: { type: Number, required: true },
                        longitude: { type: Number, required: true },
                    },
                    required: true,
                },
            },
            required: true,
        },
        type: { type: String, required: true, enum: ['apartment', 'land'] },
        status: {
            type: String,
            required: true,
            enum: ['onSale', 'openingSoon', 'handedOver'],
        },
        investor: { type: String, default: null },
        images: { type: [String], required: true },
        overview: {
            type: {
                numberOfApartments: { type: Number, required: true },
                courtNumber: { type: Number, required: true },
                legal: { type: String, required: true },
            },
            default: null,
        },
        views: { type: Number, default: 0 },
        editor: { type: String, default: null },
        creator: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// Statics
ProjectSchema.statics.getShortlistForApp = async function (
    page: number,
    region: string,
    id?: string
): Promise<IResultGetShortlistForApp | null> {
    try {
        const totals = await this.countDocuments({ 'location.region': region });
        const doc = this.find({ 'location.region': region });

        let hot: IProjectCompactForApp | null = null;

        if (page === 0) {
            if (totals >= 15) {
                const hotProject = await this.findOne({
                    'location.region': region,
                })
                    .sort('-views')
                    .select(
                        'title prices status type acreages location investor images'
                    );

                if (hotProject) {
                    const { _id, location, investor, images, ...result } =
                        hotProject.toObject();

                    let company: string | null = null;

                    if (investor) {
                        company = await InvestorsModel.getName(investor);
                    }

                    hot = {
                        ...result,
                        id: _id.toString(),
                        image: images[0],
                        address: location.address,
                        company,
                    };
                }
            }

            if (hot) {
                doc.find({ _id: { $ne: hot.id } });
            }
        }

        if (id) {
            doc.find({ _id: { $ne: id } });
        }

        const list = await doc
            .limit(10)
            .skip(page * 10)
            .select(
                'title prices status type acreages location investor images projectID'
            );

        const pages = getPages(totals - 1);
        const projects: IProjectCompactForApp[] = await Promise.all(
            [...list].map(async (item): Promise<IProjectCompactForApp> => {
                const { _id, location, images, investor, ...result } =
                    item.toObject();

                let company: string | null = null;

                if (investor) {
                    company = await InvestorsModel.getName(investor);
                }

                return {
                    ...result,
                    id: _id.toString(),
                    address: location.address,
                    image: images[0],
                    company,
                };
            })
        );

        return {
            pages,
            projects,
            hot,
        };
    } catch (error) {
        const { message } = error as Error;

        handleError('Model Projects Static Get Shortlist For App', message);

        return null;
    }
};
ProjectSchema.statics.getInfoForApp = async function (
    projectID: number
): Promise<IProjectInfoForApp | null> {
    try {
        const project = await this.findOne(
            { projectID },
            { projection: { _id: 0 } }
        ).select(
            'acreages content overview type prices status title images investor location'
        );

        if (!project) return null;

        const {
            location,
            investor: investorID,
            ...result
        } = project.toObject();

        let investor: IInvestor | null = null;

        if (investorID) {
            const checkInvestorID = await InvestorsModel.findById(investorID, {
                projection: { _id: 0 },
            });

            if (checkInvestorID) {
                investor = checkInvestorID.toObject();
            }
        }

        const regexSpace = /\s/gi;
        // eslint-disable-next-line no-useless-escape
        const regex = /(\,|\.)/gi;

        return {
            ...result,
            coordinate: location.coordinate,
            address: location.address,
            investor,
            link: `du-an/${convertToEnglish(decodeURI(result.title))
                .replaceAll(regexSpace, '-')
                .replaceAll(regex, '')}-${result.projectID}`,
        };
    } catch (error) {
        const { message } = error as Error;

        handleError('Model Projects Static Get Info For App', message);

        return null;
    }
};

// Model
const Index = model<IProject, ProjectModel>('Projects', ProjectSchema);

export default Index;
