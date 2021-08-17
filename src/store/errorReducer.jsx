const defaultState = {
  error: null,
};

const SET_ERROR = 'SET_ERROR';

export const errorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const addErrorAction = (payload) => ({
  type: SET_ERROR,
  payload,
});
