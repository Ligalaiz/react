import { PayloadAction } from '@reduxjs/toolkit';
import { INewsState } from '@src/interfaces';

const newsReducers = {
  setNewsPageNumber: (state: INewsState, action: PayloadAction<INewsState>) => {
    state.pageNumber = action.payload.pageNumber;
  },

  setSearchRequest: (state: INewsState, action: PayloadAction<INewsState>) => {
    state.searchRequest = action.payload.searchRequest;
  },

  setNewsLocal: (state: INewsState, action: PayloadAction<INewsState>) => {
    state.news = action.payload.news;
  },

  setSortType: (state: INewsState, action: PayloadAction<INewsState>) => {
    state.sortType = action.payload.sortType;
  },

  setPageSize: (state: INewsState, action: PayloadAction<INewsState>) => {
    state.pageSize = action.payload.pageSize;
  },

  setError: (state: INewsState, action: PayloadAction<INewsState>) => {
    state.error = action.payload.error;
  },
};

export { newsReducers };
