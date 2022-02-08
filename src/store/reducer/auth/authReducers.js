import { set } from '@root/utils';

const authReducers = {
  setAuthError: (state, action) => {
    state.authLoading = false;
    state.authError = action.payload.authError;
  },

  authRequest: (state, action) => {
    const user = action.payload;
    state.user = user;
    state.authLoading = false;
    set('user', user);
  },

  authRequestStart: (state) => {
    state.authLoading = true;
    state.authError = null;
  },

  authRequestEnd: (state) => {
    state.authLoading = false;
  },
};

export { authReducers };
