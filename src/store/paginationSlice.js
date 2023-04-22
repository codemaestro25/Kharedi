import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    currentPage : 1,
    totalPage : 5
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        nextPage : (state) =>{
            if(state.currentPage===state.totalPage){
                return
            }
            state.currentPage += 1;
            console.log(state.currentPage)
        },
        previousPage : (state) =>{
            if(state.currentPage===1){
                return  
               }
            state.currentPage -= 1;
            console.log(state.currentPage)
        }
    }
})

export const {nextPage, previousPage} = paginationSlice.actions;

export const getCurrentPage = (state) => state.currentPage;
export const getTotalPage = (state) => state.totalPage;  


export default paginationSlice.reducer;

