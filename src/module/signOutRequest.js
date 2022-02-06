import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signOut } from 'firebase/auth';

const signOutRequest = createAsyncThunk(
  'auth/signOutRequest',
  async (_, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      signOut(auth);

      console.log('signOutRequest');
      return {};
    } catch (e) {
      console.error(e.message);
      return rejectWithValue(e.message);
    }
  },
);

export { signOutRequest };
