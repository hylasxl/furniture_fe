import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAccountState, IAccount } from '../../types/account.type';

const initAccountSlice: IAccountState = {
    accountList: [],
    isLoaded: false
};

const accountSlice = createSlice({
    name: 'account',
    initialState: initAccountSlice,
    reducers: {
        setAccount: (state, action: PayloadAction<IAccount[]>) => {
            (state.isLoaded = true), (state.accountList = action.payload);
        }
    }
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;
