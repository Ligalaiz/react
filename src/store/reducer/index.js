import { combineReducers } from 'redux';
import { newsReducer } from './reducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

export { rootReducer };
