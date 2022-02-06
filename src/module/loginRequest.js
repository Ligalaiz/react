import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const loginRequest = createAsyncThunk(
  'auth/loginRequest',
  async (currentUser, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(
        auth,
        currentUser.email,
        currentUser.password,
      );

      return {
        user: user.email,
        id: user.uid,
        token: user.accessToken,
      };
    } catch (e) {
      console.error(e.message);
      return rejectWithValue(e.message);
    }
  },
);

export { loginRequest };
