import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';

const rootReducer = combineReducers({
  loading: loadingReducer,
  error: errorReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
