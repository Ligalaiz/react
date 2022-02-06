import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const signUpRequest = createAsyncThunk(
  'auth/signUpRequest',
  async (currentUser, { rejectWithValue }) => {
    console.log('signUpRequest currentUser', currentUser);

    try {
      const auth = getAuth();
      const { user } = await createUserWithEmailAndPassword(
        auth,
        currentUser.email,
        currentUser.password,
      );

      console.log('signUpRequest user', user);

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

export { signUpRequest };
