import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductState } from "../../types/product.type";

const initProductState: ProductState = {
    products: [],
    isLoaded: false
}

const productSlice = createSlice({
    name: "product",
    initialState: initProductState,
    reducers: {
        setProduct: (state, action: PayloadAction<IProduct[]>) => {
            state.products = action.payload
            state.isLoaded = true
        },
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.push(action.payload)
        },
    }
})

export const { setProduct, addProduct } = productSlice.actions

export default productSlice.reducer