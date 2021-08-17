const defaultState = {
  pageNumber: '1',
};

const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';

export const pageNumberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PAGE_NUMBER':
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

export const pageNumberAction = (payload) => ({
  type: SET_PAGE_NUMBER,
  payload,
});
