import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { pageSizeReducer } from './pageSizeReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
  pageSize: pageSizeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
