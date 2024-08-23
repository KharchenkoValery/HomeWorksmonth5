import { createSlice } from "@reduxjs/toolkit";


const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState: {
        mainTitle: 0
    },
    reducers: {
        plusOne: (state, action) => {
            state.mainTitle = state.mainTitle +1
        },
        plusTen: (state, action) => {
            state.mainTitle = state.mainTitle +10
        },
        reset: (state, action) => {
            state.mainTitle = 0
        },
        minusOne: (state, action) => {
            state.mainTitle = state.mainTitle > 0 ? state.mainTitle - 1 : 0
        },
        minusTen: (state, action) => {
            state.mainTitle = state.mainTitle >= 10 ? state.mainTitle - 10 : 0
        }
    }
})

export const  { plusOne, plusTen, reset, minusOne, minusTen, mainTitle } = mainPageSlice.actions;

export default mainPageSlice.reducer