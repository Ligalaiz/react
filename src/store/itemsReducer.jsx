const defaultState = {
  items: [],
};

const SET_ITEMS = 'SET_ITEMS';

export const itemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};

export const itemsAction = (payload) => ({
  type: SET_ITEMS,
  payload,
});
