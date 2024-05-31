import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryState, ICategory } from '../../types/category.type';

const initialCategoryState: CategoryState = {
    categories: [],
    isLoaded: false
};

const categorySlice = createSlice({
    name: 'category',
    initialState: initialCategoryState,
    reducers: {
        setCategory: (state, action: PayloadAction<{ category: string; specificCategories: ICategory[] }[]>) => {
            state.categories = action.payload;
            state.isLoaded = true;
        }
    }
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
