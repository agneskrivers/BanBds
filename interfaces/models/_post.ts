// Types
type PostCreateKey =
    | 'postID'
    | 'userID'
    | 'status'
    | 'createdAt'
    | 'updatedAt'
    | 'views'
    | 'editor'
    | 'broker'
    | 'location';
type PostCompactForAppKey =
    | 'title'
    | 'prices'
    | 'acreages'
    | 'category'
    | 'legal'
    | 'direction'
    | 'postID';
type PostSortKey = 'acreages' | 'prices' | 'createdAt';
type PostInfoKey =
    | 'userID'
    | 'poster'
    | 'broker'
    | 'createdAt'
    | 'updatedAt'
    | 'editor'
    | 'status'
    | 'location'
    | 'postID';
type MyPostInfoKey =
    | Exclude<PostInfoKey, 'location' | 'poster' | 'status'>
    | 'views';
type PostUpdateForUserKey =
    | 'postID'
    | 'userID'
    | 'status'
    | 'location'
    | 'poster'
    | 'broker'
    | 'views'
    | 'editor'
    | 'createdAt'
    | 'updatedAt';

type PostCreateLocation = Omit<IPostLocation, 'coordinate' | 'address'> &
    Partial<Pick<IPostLocation, 'address'>>;
type PostCreate = Omit<IPost, PostCreateKey>;
type PostCompactForApp = Pick<IPost, PostCompactForAppKey>;
type PostInfo = Omit<IPost, PostInfoKey>;
type PostUpdateForUser = Partial<Omit<IPost, PostUpdateForUserKey>>;
type MyPostInfo = Omit<IPost, MyPostInfoKey>;

// Export Types
export type IPostCategory = 'apartment' | 'house' | 'soil';
export type IPostStatus = 'pending' | 'accept' | 'sold';
export type IPostType = 'sell' | 'rent';
export type IPostDirection =
    | 'east'
    | 'west'
    | 'south'
    | 'north'
    | 'northeast'
    | 'northwest'
    | 'southwest'
    | 'southeast';
export type IPostLegal = 'book' | 'saleContract' | 'waitingForBook';
export type IPostSortValue = 'asc' | 'desc';
export type IPostSort = Partial<Record<PostSortKey, IPostSortValue>>;

// Export Interfaces
export interface IPoster {
    name: string;
    phoneNumber: string[];
}
export interface IPostCoordinate {
    latitude: number;
    longitude: number;
}
export interface IPostLocation {
    region: string;
    district: string;
    ward: string;
    address: string;
    coordinate: IPostCoordinate;
}
export interface IPostCreate extends PostCreate {
    location: PostCreateLocation;
}
export interface IPost {
    postID: number;
    userID: number;
    status: IPostStatus;

    title: string;
    content: string;

    location: IPostLocation;

    acreages: number;
    prices: number;

    category: IPostCategory;
    type: IPostType;

    project: string | null;

    poster: IPoster;
    broker: string | null;

    direction: null | IPostDirection;
    facades: null | number;
    ways: null | number;
    legal: null | IPostLegal;

    video: string | null;
    images: string[];

    views: number;

    editor: string | null;

    createdAt: Date;
    updatedAt: Date;
}
export interface IPostCompactForApp extends PostCompactForApp {
    id: string;
    image: string;
    address: string;
    isVideo: boolean;
}
export interface IPostFilterByValue {
    min: number;
    max: number;
}
export interface IPostFilter {
    category?: IPostCategory;
    acreages?: IPostFilterByValue;
    prices?: IPostFilterByValue;
}
export interface IPostInfoForWeb extends PostInfo {
    address: string;
    coordinate: IPostCoordinate;
    time: number;
    contact: string;
    phoneNumber: string[];
}
export interface IPostInfoForApp extends IPostInfoForWeb {
    link: string;
}
export interface IPostUpdateForUser extends PostUpdateForUser {
    poster?: Partial<IPoster>;
    location?: Partial<Omit<IPostLocation, 'coordinate'>>;
    removeImages?: string[];
}
export interface IMyPostInfo extends MyPostInfo {
    time: number;
}
