// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated:false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState, 
  reducers: {
    login(state, action) {
        
    },
    logout(state) {
        
    },
    Signup(state, action){
       
    }
  },
});

export const Authactions = authSlice.actions;
export default authSlice.reducer;

