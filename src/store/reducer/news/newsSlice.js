import { createSlice } from '@reduxjs/toolkit';
import { getNews } from './getNews';
import { newsReducers } from './newsReducers';

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

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: newsReducers,
  extraReducers: { ...getNews },
});

const newsActions = newsSlice.actions;
const newsReducer = newsSlice.reducer;

export { newsReducer, newsActions };
