import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../../types/auth.type';
import { IUser } from '../../types/user.type';

const userInitState: Omit<IUser, 'loginType'> = {
    _id: '',
    password: '',
    email: '',
    accountType: '',
    isActivated: false,
    registerType: '',
    token: '',
    refreshToken: '',
    accessToken: '',
    firstName: '',
    lastName: '',
    dateofBirth: null,
    avatarURL: '',
    gender: '',
    address: '',
    phone: '',
    permissions: []
};

const authInitState: AuthState = {
    isAuthenticated: false,
    user: userInitState,
    loginType: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitState,
    reducers: {
        setAuthenticationState: (state, action: PayloadAction<IUser>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.loginType = action.payload.loginType;
        },
        removeAuthenticationState: (state) => {
            state.isAuthenticated = false;
            state.user = userInitState;
            state.loginType = '';
        }
    }
});

export const { setAuthenticationState, removeAuthenticationState } = authSlice.actions;

export default authSlice.reducer;
