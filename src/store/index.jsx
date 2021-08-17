import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { pageSizeReducer } from './pageSizeReducer';
import { pageNumberReducer } from './pageNumberReducer';
import { sortTypeReducer } from './sortTypeReducer';
import { searchRequestReducer } from './searchRequestReducer';
import { pageTotalReducer } from './pageTotalReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  pageSize: pageSizeReducer,
  pageNumber: pageNumberReducer,
  sortType: sortTypeReducer,
  searchRequest: searchRequestReducer,
  pageTotal: pageTotalReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
