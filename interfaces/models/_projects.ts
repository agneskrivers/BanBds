// Interfaces
import type { IInvestor } from '@interfaces';

// Type
type ProjectCompactForAppKey =
    | 'title'
    | 'prices'
    | 'status'
    | 'type'
    | 'acreages';
type ProjectInfoKey =
    | 'acreages'
    | 'content'
    | 'overview'
    | 'type'
    | 'prices'
    | 'status'
    | 'title'
    | 'images';

type ProjectCompactForApp = Pick<IProject, ProjectCompactForAppKey>;
type ProjectInfo = Pick<IProject, ProjectInfoKey>;

// Interface
interface ProjectPriceByValue {
    min: number;
    max: number;
}

// Export Type
export type IProjectType = 'apartment' | 'land';
export type IProjectStatus = 'onSale' | 'openingSoon' | 'handedOver';
export type IProjectInfoForWeb = Omit<
    IProjectInfoForApp,
    'link' | 'coordinate'
>;

// Export Interface
export interface IProjectOverview {
    numberOfApartments: number;
    courtNumber: number;
    legal: string;
}
export interface IProjectLocation {
    region: string;
    district: string;
    ward: string;
    address: string;
    coordinate: IProjectLocationCoordinate;
}
export interface IProjectLocationCoordinate {
    latitude: number;
    longitude: number;
}
export interface IProject {
    projectID: number;

    title: string;
    content: string;

    acreages: string;
    prices: number | ProjectPriceByValue | null;

    location: IProjectLocation;

    type: IProjectType;
    status: IProjectStatus;

    investor: string | null;

    images: string[];
    overview: IProjectOverview | null;

    views: number;

    creator: string;
    editor: string | null;

    createdAt: Date;
    updatedAt: Date;
}
export interface IProjectCompactForApp extends ProjectCompactForApp {
    id: string;
    image: string;
    company: string | null;
    address: string;
}
export interface IProjectInfoForApp extends ProjectInfo {
    investor: IInvestor | null;
    address: string;
    coordinate: IProjectLocationCoordinate;
    link: string;
}
export interface IResultGetShortlistForApp {
    hot: IProjectCompactForApp | null;
    projects: IProjectCompactForApp[];
    pages: number;
}
