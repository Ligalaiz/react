import { INewsState, NewsAction, NewsTypes } from '@src/interfaces';

const initialState: INewsState = {
  news: [],
  loading: false,
  error: null,
  pageTotal: 0,
  pageNumber: '1',
  searchRequest: '',
  sortType: 'relevancy',
  pageSize: '1',
};

const newsReducer = (state = initialState, action: NewsAction): INewsState => {
  const { type } = action;

  if (type === NewsTypes.FETCH_NEWS) {
    return { ...state, loading: true, error: null };
  }

  if (type === NewsTypes.FETCH_NEWS_SUCCESS) {
    return { ...state, news: action.payload, loading: false };
  }

  if (type === NewsTypes.FETCH_NEWS_ERROR) {
    return { ...state, loading: false, error: action.payload };
  }

  if (type === NewsTypes.SET_PAGE_NUMBER) {
    return { ...state, pageNumber: action.payload };
  }

  if (type === NewsTypes.SET_SEARCH_REQUEST) {
    return { ...state, searchRequest: action.payload };
  }

  if (type === NewsTypes.SET_NEWS_LOCAL) {
    return { ...state, news: action.payload };
  }

  if (type === NewsTypes.SET_SORT_TYPE) {
    return { ...state, sortType: action.payload };
  }

  if (type === NewsTypes.SET_PAGE_SIZE) {
    return { ...state, pageSize: action.payload };
  }

  if (type === NewsTypes.SET_TOTAL_PAGE) {
    return { ...state, pageTotal: action.payload };
  }

  if (type === NewsTypes.SET_ERROR) {
    return { ...state, error: null };
  }

  return state;
};

export { newsReducer, initialState };
