const defaultState = {
  searchRequest: '',
};

const SET_SEARCH_REQUEST = 'SET_SEARCH_REQUEST';

export const searchRequestReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_REQUEST:
      return { ...state, searchRequest: action.payload };
    default:
      return state;
  }
};

export const searchRequestAction = (payload) => ({
  type: SET_SEARCH_REQUEST,
  payload,
});
