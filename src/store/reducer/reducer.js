const initialState = {
  news: [],
  loading: false,
  error: null,
  pageTotal: 0,
  pageNumber: '1',
  searchRequest: '',
  sortType: 'relevancy',
  pageSize: '1',
};

export const NEWS_TYPES = {
  FETCH_NEWS: 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
  SET_PAGE_NUMBER: 'SET_PAGE_NUMBER',
  SET_NEWS_LOCAL: 'SET_NEWS_LOCAL',
  SET_SORT_TYPE: 'SET_SORT_TYPE',
  SET_PAGE_SIZE: 'SET_PAGE_SIZE',
  SET_TOTAL_PAGE: 'SET_TOTAL_PAGE',
  SET_SEARCH_REQUEST: 'SET_SEARCH_REQUEST',
  SET_ERROR: 'SET_ERROR',
};

const newsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === NEWS_TYPES.FETCH_NEWS) {
    return { ...state, loading: true, error: null };
  }

  if (type === NEWS_TYPES.FETCH_NEWS_SUCCESS) {
    return { ...state, news: payload, loading: false };
  }

  if (type === NEWS_TYPES.FETCH_NEWS_ERROR) {
    return { ...state, loading: false, error: payload };
  }

  if (type === NEWS_TYPES.SET_PAGE_NUMBER) {
    return { ...state, pageNumber: payload };
  }

  if (type === NEWS_TYPES.SET_SEARCH_REQUEST) {
    return { ...state, searchRequest: payload };
  }

  if (type === NEWS_TYPES.SET_NEWS_LOCAL) {
    return { ...state, news: payload };
  }

  if (type === NEWS_TYPES.SET_SORT_TYPE) {
    return { ...state, sortType: payload };
  }

  if (type === NEWS_TYPES.SET_PAGE_SIZE) {
    return { ...state, pageSize: payload };
  }

  if (type === NEWS_TYPES.SET_TOTAL_PAGE) {
    return { ...state, pageTotal: payload };
  }

  if (type === NEWS_TYPES.SET_ERROR) {
    return { ...state, error: null };
  }

  return state;
};

export { newsReducer };
