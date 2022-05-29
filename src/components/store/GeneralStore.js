import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthoSlice from './AuthoSlice';
import PicturesReducer from './PicturesSlice';
const store = configureStore({
    reducer:{
        AuthoReducer: AuthoSlice,
        PicturesReducer: PicturesReducer
    }
})
export default store;