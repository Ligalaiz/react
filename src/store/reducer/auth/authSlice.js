import { createSlice } from '@reduxjs/toolkit';
import { authReducers } from './authReducers';
import { login } from './login';
import { signUp } from './signUp';
import { signOut } from './signOut';

const initialState = {
  user: null,
  authLoading: false,
  authError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: authReducers,

  extraReducers: {
    ...login,
    ...signUp,
    ...signOut,
  },
});

const authActions = authSlice.actions;
const authReducer = authSlice.reducer;

export { authReducer, authActions };
