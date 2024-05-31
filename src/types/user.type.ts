export interface IUser {
    _id: string;
    password: string;
    email: string;
    accountType: string;
    isActivated: boolean;
    registerType: string;
    token: string;
    refreshToken: string;
    loginType: string;
    accessToken: string;
    firstName: string;
    lastName: string;
    dateofBirth: null;
    avatarURL: string;
    gender: string;
    address: string;
    phone: string;
    permissions: string[];
}
