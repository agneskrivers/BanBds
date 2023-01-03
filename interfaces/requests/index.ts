// Interfaces
import type { IPostType, IPostCategory, IPostSortValue } from '@interfaces';

// Export Interfaces
export interface IServerServiceESmsReqBody {
    ApiKey: string;
    SecretKey: string;
    Phone: string;
    Content: string;
    SmsType: number;
}
export interface IApiReqParamsPhoneNumber {
    phoneNumber: string;
}
export interface IApiLoginCheckReqBody {
    otp: string;
}

export interface IApiAppReqLocals {
    userID: number;
}

export interface IApiReqParamsPostID {
    postID: string;
}
export interface IApiAppPostShortlistReqQuery {
    type: IPostType;
    page: string;
    region?: string;
    search?: string;
    category?: IPostCategory;
    pricesMin?: string;
    pricesMax?: string;
    acreagesMin?: string;
    acreagesMax?: string;
    prices?: IPostSortValue;
    acreages?: IPostSortValue;
    createdAt?: IPostSortValue;
}
