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
    state.error = action.payload.error;
  },
};

export { newsReducers };
