const defaultState = {
  sortType: 'relevancy',
};

const SET_SORT_TYPE = 'SET_SORT_TYPE';

export const sortTypeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SORT_TYPE:
      return { ...state, sortType: action.payload };
    default:
      return state;
  }
};

export const sortTypeAction = (payload) => ({
  type: SET_SORT_TYPE,
  payload,
});
