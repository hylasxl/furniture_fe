import { IUser } from './user.type';

interface AuthState {
    isAuthenticated: boolean;
    user: Omit<IUser, 'loginType'>;
    loginType: string;
}

export type { AuthState };
