import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {BASIC_URL} from '../utils/apiUrl'
import {STATUS} from '../utils/status';

const initialState = {
    products : [],
    productsStatus : STATUS.IDLE,
    singleProduct : [],
    singleProductStatus : STATUS.IDLE
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase( fetchAsyncProducts.pending, (state, action)=>{ //for all products
            state.productsStatus = STATUS.LOADING;

        }).addCase( fetchAsyncProducts.fulfilled, (state, action)=>{
            state.products = action.payload;
            state.productsStatus = STATUS.SUCCEEDED;
        }).addCase( fetchAsyncProducts.rejected, (state, action )=>{
            state.productsStatus = STATUS.FAILED;
        }).addCase( fetchAsyncSingleProduct.pending, (state, action)=>{ //for signle product
            state.singleProductStatus = STATUS.LOADING;

        }).addCase( fetchAsyncSingleProduct.fulfilled, (state, action)=>{
            state.singleProduct = action.payload;
            state.singleProductStatus = STATUS.SUCCEEDED;
        }).addCase( fetchAsyncSingleProduct.rejected, (state, action )=>{
            state.singleProductStatus = STATUS.FAILED;
        })
    }
});

// for fetching the products with a limit
export const fetchAsyncProducts = createAsyncThunk('products/fetch', async(limit)=>{
    // api call
    const response = await fetch (`${BASIC_URL}/products?limit=${limit}`);
    const data = await response.json();
    return data;
});


// fetching the single product detail using api call
export const fetchAsyncSingleProduct = createAsyncThunk('single-product', async(id)=>{
    const response = await fetch(`${BASIC_URL}/products/${id}`);
    const data = await response.json();
    return data;
});

export const getAllProducts = (state) => state.product.products;

export const getAllProductsStatus = (state)=> state.product.productsStatus;

export const getSingleProduct = (state) => state.product.singleProduct;

export const getSingleProductStatus = (state) => state.product.singleProductStatus;

export default productSlice.reducer;