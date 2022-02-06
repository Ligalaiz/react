import { createSlice } from '@reduxjs/toolkit';
import { newsRequest } from '@root/module';
import { set } from '@root/utils';
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
  extraReducers: {
    [newsRequest.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [newsRequest.fulfilled]: (state, action) => {
      const result = action.payload;
      const resultWithID = result.articles.map((item, index) => {
        item.id = `${index}`;
        return item;
      });

      state.news = resultWithID;
      state.loading = false;
      state.pageTotal = result.total_pages;
      set('items', resultWithID || []);
    },
    [newsRequest.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.pageNumber = '1';
    },
  },
});

const newsActions = newsSlice.actions;
const newsReducer = newsSlice.reducer;

export { newsReducer, newsActions };
