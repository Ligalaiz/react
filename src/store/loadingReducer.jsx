const defaultState = {
  loading: false,
};

const SET_LOADING = 'SET_LOADING';

export const loadingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      console.log(action.payload);
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const addLoadingAction = (payload) => ({ type: SET_LOADING, payload });
