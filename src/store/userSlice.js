import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: [
        {
            "id": 1,
            "name": "Arun gupta",
            "email": "arungupta3810@gmail.com",
            "gender": "Male",
            "password": "Pass@123"
        },
        {
            "id": 2,
            "name": "Anand Raj",
            "email": "anandraj@gmail.com",
            "gender": "Male",
            "password": "Pass@1234"
        }
    ]
}) 

export default userSlice.reducer