import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'error',
    initialState: {
        showError: false,
        errorMessage: ''
    },
    reducers: {
        setMessage: function(state, action){
            return action.payload;
        },
        removeUser: function(state){
            return null;
        },
    } 
})

export const { setMessage } = errorSlice.actions
export default errorSlice.reducer