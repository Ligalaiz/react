const authReducers = {
  setAuthError: (state, action) => {
    state.authError = action.payload.authError;
  },
};

export { authReducers };
