import { configureStore } from "@reduxjs/toolkit";
import MainPageSlice from "./MainPageSlice";

export const store = configureStore({
    reducer: {
        mainReducer:MainPageSlice
    },
})