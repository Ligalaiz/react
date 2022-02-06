import { loginRequest } from '@root/module';
import { set } from '@root/utils';

const login = {
  [loginRequest.pending]: (state) => {
    state.authLoading = true;
    state.authError = null;
  },
  [loginRequest.fulfilled]: (state, action) => {
    const user = action.payload;
    state.user = user;
    console.log('login');
    set('user', user);
  },
  [loginRequest.rejected]: (state, action) => {
    state.authLoading = false;
    state.authError = action.payload;
  },
};

export { login };
