import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { searchRequestReducer } from './searchRequestReducer';
import { pageNumberReducer } from './pageNumberReducer';
import { pageTotalReducer } from './pageTotalReducer';
import { pageSizeReducer } from './pageSizeReducer';
import { sortTypeReducer } from './sortTypeReducer';
import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { itemsReducer } from './itemsReducer';

const rootReducer = combineReducers({
  searchRequest: searchRequestReducer,
  pageNumber: pageNumberReducer,
  pageTotal: pageTotalReducer,
  pageSize: pageSizeReducer,
  sortType: sortTypeReducer,
  loading: loadingReducer,
  error: errorReducer,
  items: itemsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
