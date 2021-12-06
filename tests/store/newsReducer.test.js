import { newsReducer, NEWS_TYPES } from '../../src/store/reducer/reducer';

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

describe('Check News  Reducer', () => {
  it('Fetch news', () => {
    const result = newsReducer(initialState, { type: NEWS_TYPES.FETCH_NEWS });
    expect(result.loading).toEqual(true);
    expect(result.error).toEqual(null);
  });

  it('Fetch news success', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.FETCH_NEWS_SUCCESS,
      payload: [],
    });
    expect(result.news).toEqual([]);
    expect(result.loading).toEqual(false);
  });

  it('Fetch news error', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.FETCH_NEWS_ERROR,
      payload: 'Error',
    });
    expect(result.error).toEqual('Error');
    expect(result.loading).toEqual(false);
  });

  it('Set page number', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_PAGE_NUMBER,
      payload: '1',
    });
    expect(result.pageNumber).toEqual('1');
  });

  it('Set serch request', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_SEARCH_REQUEST,
      payload: 'Test',
    });
    expect(result.searchRequest).toEqual('Test');
  });

  it('Set local news', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_NEWS_LOCAL,
      payload: [],
    });
    expect(result.news).toEqual([]);
  });

  it('Set sort type', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_SORT_TYPE,
      payload: 'relevancy',
    });
    expect(result.sortType).toEqual('relevancy');
  });

  it('Set page size', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_PAGE_SIZE,
      payload: '10',
    });
    expect(result.pageSize).toEqual('10');
  });

  it('Set total page', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_TOTAL_PAGE,
      payload: '5',
    });
    expect(result.pageTotal).toEqual('5');
  });

  it('Set error', () => {
    const result = newsReducer(initialState, {
      type: NEWS_TYPES.SET_ERROR,
      payload: null,
    });
    expect(result.error).toEqual(null);
  });
});
