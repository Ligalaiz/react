const defaultState = {
  pageSize: '1',
};

const SET_PAGE_SIZE = 'SET_PAGE_SIZE';

export const pageSizeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    default:
      return state;
  }
};

export const pageSizeAction = (payload) => ({
  type: SET_PAGE_SIZE,
  payload,
});
