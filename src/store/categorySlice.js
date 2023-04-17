import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASIC_URL } from "../utils/apiUrl";
import { STATUS } from "../utils/status";

const initialState = {
    categories : [],
    categoriesStatus : STATUS.IDLE,
    categoryProducts : [],
    categoryProductStatus :  STATUS.IDLE,
}


const categorySlice =  createSlice({
    name: 'category',
    initialState,
    reducers : {},
    extraReducers : (builder)=>{
        builder.addCase(fetchAsyncCategories.pending, (state)=>{
            state.categoriesStatus = STATUS.LOADING;
        }).addCase(fetchAsyncCategories.fulfilled, (state,action)=>{
            state.categories = action.payload;
            state.categoriesStatus = STATUS.SUCCEEDED;
        }).addCase(fetchAsyncCategories.rejected, (state)=>{
            state.categoriesStatus = STATUS.FAILED;
        })
        .addCase(fetchAsyncCategoryProducts.pending, (state)=>{
            state.categoryProductStatus = STATUS.LOADING;
        }).addCase(fetchAsyncCategoryProducts.fulfilled, (state,action)=>{
            state.categoryProducts = action.payload;
            state.categoryProductStatus = STATUS.SUCCEEDED;
        }).addCase(fetchAsyncCategoryProducts.rejected, (state)=>{
            state.categoryProductStatus = STATUS.FAILED;
        })

        
    }
});

// api call
export const fetchAsyncCategories = createAsyncThunk('categories/fetch', async()=>{
    const respone = await fetch(`${BASIC_URL}/products/categories`);
    const data = await respone.json();
    return data;
})
// api for fetching products of a particular type
export const fetchAsyncCategoryProducts = createAsyncThunk('category-products/fetch', async(category)=>{
    const response = await fetch(`${BASIC_URL}/products/category/${category}`);
    const data = await response.json();
    return data;

})

export const getAllCategories = (state) => state.category.categories;
export const getAllProductsByCategory =(state) => state.category.categoryProducts;

export const getCategoryProductStatus = (state) => state.category.categoryProductStatus;

export default categorySlice.reducer;