import { set } from '@root/utils';

const newsReducers = {
  setNewsPageNumber: (state, action) => {
    state.pageNumber = action.payload.pageNumber;
  },

  setSearchRequest: (state, action) => {
    state.searchRequest = action.payload.searchRequest;
  },

  setNewsLocal: (state, action) => {
    state.news = action.payload.news;
  },

  setSortType: (state, action) => {
    state.sortType = action.payload.sortType;
  },

  setPageSize: (state, action) => {
    state.pageSize = action.payload.pageSize;
  },

  setError: (state, action) => {
    state.loading = false;
    state.error = action.payload.error;
  },

  newsRequest: (state, action) => {
    const result = action.payload || [];
    const resultWithID = result.articles.map((item, index) => {
      item.id = `${index}`;
      return item;
    });

    state.news = resultWithID;
    state.loading = false;
    state.pageTotal = result.total_pages;
    set('items', resultWithID || []);
  },

  newsLoadingStart: (state) => {
    state.loading = true;
    state.error = null;
  },

  newsLoadingEnd: (state) => {
    state.loading = false;
  },
};

export { newsReducers };
