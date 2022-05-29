import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialAuthoState = {
    isLoggedIn: false,
    status: null,
    token: null,
    email: '',
    initCats: [],
};
const AuthoSlice = createSlice({
  name: 'authorization',
  initialState: initialAuthoState,
  reducers:{
    
    login: (state, action) => {
    
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.email = action.payload.email;
    },
    logout: (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.email = null;
    },
  }
  
})
export const AuthoActs = AuthoSlice.actions;
export default AuthoSlice.reducer