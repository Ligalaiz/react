import { signUpRequest } from '@root/module';
import { set } from '@root/utils';

const signUp = {
  [signUpRequest.pending]: (state) => {
    state.authLoading = true;
    state.authError = null;
  },

  [signUpRequest.fulfilled]: (state, action) => {
    const user = action.payload;
    state.user = user;
    set('user', user);
    state.authLoading = false;
  },

  [signUpRequest.rejected]: (state, action) => {
    state.authLoading = false;
    state.authError = action.payload;
  },
};

export { signUp };
