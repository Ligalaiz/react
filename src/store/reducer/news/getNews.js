import { newsRequest } from '@root/module';
import { set } from '@root/utils';

const getNews = {
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
};

export { getNews };
