import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken : '',
}

const userSlice = createSlice({
    name:'User',
    initialState,
    reducers:{
        setAccessToken : (state,action)=>{
            state.accessToken = action.payload.accessToken
        }
    }
})

export const {setAccessToken} = userSlice.actions
export default userSlice.reducer

