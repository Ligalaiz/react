import { createSlice } from '@reduxjs/toolkit';
import { authReducers } from './authReducers';

const initialState = {
  user: null,
  authLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers,
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, authActions };
