import { configureStore } from "@reduxjs/toolkit";
import MainPageSlice from "./MainPageSlice";
import postPageSliceReducer from "./PostsSlice"
import postReducer from "./PostsSlice"

export const store = configureStore({
    reducer: {
        mainReducer:MainPageSlice,
        // postReducer:postPageSliceReducer,
        posts: postReducer,
    },
})