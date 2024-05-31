export interface IAccountInfo {
    accountId: string;
    avatarURL: string;
    createdAt: string;
    lastName: string;
    firstName: string;
    phone: string;
    updatedAt: string;
    __v: number;
    _id: string;
}

export interface IGoogleProvider {
    accessToken: string;
    authToken: string;
    refreshToken: string;
    uid: string;
    _id: string;
}

export interface IAuthProvider {
    google: IGoogleProvider;
}

export interface IAccount {
    accessToken?: string;
    accountInfo?: IAccountInfo;
    accountType?: string;
    authProviders?: IAuthProvider;
    email?: string;
    id?: string;
    isActivated?: boolean;
    loginType?: 'Normal' | 'Google';
    refreshToken?: string;
    registerType?: 'Normal' | 'Google';
    __v: number;
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface IAccountState {
    accountList: IAccount[];
    isLoaded: boolean;
}
