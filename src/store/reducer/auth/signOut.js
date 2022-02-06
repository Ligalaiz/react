import { signOutRequest } from '@root/module';
import { del } from '@root/utils';

const signOut = {
  [signOutRequest.pending]: (state) => {
    state.authLoading = true;
    state.authError = null;
  },
  [signOutRequest.fulfilled]: (state) => {
    state.user = null;
    del('user')
    state.authLoading = false;
  },
  [signOutRequest.rejected]: (state, action) => {
    state.authLoading = false;
    state.authError = action.payload;
  },
};

export { signOut };
