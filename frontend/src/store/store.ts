import { configureStore } from "@reduxjs/toolkit";
import BaseApi  from "../api/BaseApi";
import { OtpVerificationApi } from "../services/otpVerificition";
import UserSlice from './slices/userSlice'
export const store = configureStore({
    reducer:{
        userReducer:UserSlice,
        [OtpVerificationApi.reducerPath]:OtpVerificationApi.reducer,
        [BaseApi.reducerPath]:BaseApi.reducer,
    },
    middleware: getDefaultMiddleware => {
       return getDefaultMiddleware().concat(BaseApi.middleware).concat(OtpVerificationApi.middleware)
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

