import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';

const rootReducer = combineReducers({
  news: newsReducer,
});

type TypedReducer = ReturnType<typeof rootReducer>;

export { rootReducer, TypedReducer };
