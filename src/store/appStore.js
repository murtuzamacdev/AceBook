import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import friendSlice from './friendSlice'
import postSlice from './postSlice'
import errorSlice from "./errorSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        friend: friendSlice,
        post: postSlice,
        error: errorSlice
    }
})

export default store;