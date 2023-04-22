// redux store file
import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice';
import categoryReducer from './categorySlice'
import productReducer from './productSlice';
import cartReducer from './cartSlice'
import paginationReducer from './paginationSlice'
const store = configureStore({
    reducer:{
        sidebar: sidebarReducer,
        category : categoryReducer,
        product: productReducer,
        cart : cartReducer,
        pagination : paginationReducer
    }
});

export default store;