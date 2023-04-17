import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASIC_URL } from "../utils/apiUrl";
import { STATUS } from "../utils/status";


const initialState = {
    searchProducts : [],
    searchProductsStatus : STATUS.IDLE
}

const searchSlice = createSlice({
    name :'search',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase()
    }
})


