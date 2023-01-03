import { model, Model, Schema } from 'mongoose';

// Helpers
import { handleError, getPages } from '@server/helpers';

// Interfaces
import type {
    INews,
    INewsCompactForApp,
    IHotNewsCompactForApp,
    INewsInfo,
} from '@interfaces';

// Interface
interface ResultGetShortlistForApp {
    hot: IHotNewsCompactForApp | null;
    news: INewsCompactForApp[];
    pages: number;
}

// Model Interface
interface NewsModel extends Model<INews> {
    getShortlistForApp(
        page: number,
        region: string
    ): Promise<ResultGetShortlistForApp | null>;
    getInfo(id: string): Promise<INewsInfo | null>;
}

// Schema
const NewsSchema = new Schema<INews, NewsModel>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        content: { type: String, required: true },
        thumbnail: { type: String, required: true },
        images: { type: [String], required: true },
        creator: { type: String, required: true },
        editor: { type: String, default: null },
        views: { type: Number, default: 0 },
        region: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// Statics
NewsSchema.statics.getShortlistForApp = async function (
    page: number,
    region: string
): Promise<ResultGetShortlistForApp | null> {
    try {
        const count = this.countDocuments();
        const doc = this.find();

        if (region !== 'all') {
            doc.find({ region });
            count.countDocuments({ region });
        }

        const totals = await count.exec();

        let hot: IHotNewsCompactForApp | null = null;

        if (totals >= 15) {
            const hotNewsDoc = this.findOne()
                .sort('-views')
                .select('title description thumbnail');

            if (region) {
                const hotNews = await hotNewsDoc.findOne({ region });

                if (hotNews) {
                    const { _id, ...result } = hotNews.toObject();

                    hot = {
                        ...result,
                        id: _id.toString(),
                    };
                }
            }

            if (hot) {
                doc.find({ _id: { $ne: hot.id } });
            }
        }

        const list = await doc
            .limit(10)
            .skip(page * 10)
            .select('title thumbnail createdAt');

        const pages = getPages(page);
        const news: INewsCompactForApp[] = [...list].map((item) => {
            const { _id, createdAt, ...result } = item.toObject();

            return {
                ...result,
                id: _id.toString(),
                createdAt: new Date(createdAt).getTime(),
            };
        });

        return {
            hot,
            news,
            pages,
        };
    } catch (error) {
        const { message } = error as Error;

        handleError('Model News Static Get Shortlist For App', message);

        return null;
    }
};
NewsSchema.statics.getInfo = async function (
    id: string
): Promise<INewsInfo | null> {
    try {
        const news = await this.findById(id, { projection: { _id: 0 } }).select(
            'title description content'
        );

        if (!news) return null;

        return news.toObject();
    } catch (error) {
        const { message } = error as Error;

        handleError('Model News Static Get Info', message);

        return null;
    }
};

// Models
const Index = model<INews, NewsModel>('News', NewsSchema);

export default Index;
