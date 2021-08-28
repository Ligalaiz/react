import { combineReducers } from 'redux';
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

export default rootReducer;
