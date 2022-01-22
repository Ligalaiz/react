import { createSlice } from '@reduxjs/toolkit';
import { newsRequest } from '@src/module';
import { set } from '@src/utils';
import { newsReducers } from './newsReducer';
import { INewsState, IArticles } from '@src/interfaces';

const initialState = {
  news: [],
  loading: false,
  error: null,
  pageTotal: 0,
  pageNumber: '1',
  searchRequest: '',
  sortType: 'relevancy',
  pageSize: '1',
} as INewsState;

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: newsReducers,
  extraReducers: (builder) => {
    builder.addCase(newsRequest.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(newsRequest.fulfilled, (state, action) => {
      const result = action.payload;
      const resultWithID = result.articles.map(
        (item: IArticles, index: number) => {
          item.id = `${index}`;
          return item;
        },
      );

      state.news = resultWithID;
      state.loading = false;
      state.pageTotal = result.total_pages;
      set('items', resultWithID || []);
    });

    builder.addCase(newsRequest.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.pageNumber = '1';
    });
  },
});

const newsActions = newsSlice.actions;
const newsReducer = newsSlice.reducer;

export { newsReducer, newsActions };
