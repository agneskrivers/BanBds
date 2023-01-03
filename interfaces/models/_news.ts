// Type
type NewsCompactForApp = Pick<INews, 'title' | 'thumbnail'>;
type NewsInfo = Pick<INews, 'title' | 'description' | 'content'>;

// Export Type
export type IHotNewsCompactForApp = Omit<INewsCompactForApp, 'createdAt'> &
    Pick<INews, 'description'>;

// Export Interface
export interface INews {
    title: string;
    description: string;
    content: string;
    thumbnail: string;
    images: string[];
    views: number;

    editor: string;
    creator: string;

    region: string;

    createdAt: Date;
    updatedAt: Date;
}
export interface INewsCompactForApp extends NewsCompactForApp {
    id: string;
    createdAt: number;
}
export interface INewsInfo extends NewsInfo {
    time: number;
}
