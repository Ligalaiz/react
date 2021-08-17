const defaultState = {
  pageTotal: 0,
};

const SET_PAGE_TOTAL = 'SET_PAGE_TOTAL';

export const pageTotalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PAGE_TOTAL:
      return { ...state, pageTotal: action.payload };
    default:
      return state;
  }
};

export const pageTotalAction = (payload) => ({
  type: SET_PAGE_TOTAL,
  payload,
});
