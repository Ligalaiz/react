import { set } from '@root/utils';
import { data } from '@root/utils/getUrl.utils';
import { NEWS_TYPES } from '../reducer/reducer';

const fetchNews = (url) => {
  return async (dispatch) => {
    try {
      dispatch({ type: NEWS_TYPES.FETCH_NEWS });

      const response = await fetch(url, data());
      const result = await response.json();

      const resultWithID = result.articles.map((item, index) => {
        item.id = `${index}`;
        return item;
      });

      setTimeout(() => {
        dispatch({
          type: NEWS_TYPES.FETCH_NEWS_SUCCESS,
          payload: resultWithID,
        });

        set('items', resultWithID || []);
        dispatch({
          type: NEWS_TYPES.SET_TOTAL_PAGE,
          payload: result.total_pages,
        });
      });
    } catch (e) {
      dispatch({
        type: NEWS_TYPES.FETCH_NEWS_ERROR,
        payload: 'Ошибка загрузки новостей',
      });

      dispatch({
        type: NEWS_TYPES.SET_PAGE_NUMBER,
        payload: '1',
      });
    }
  };
};

const setNewsPage = (page) => {
  return {
    type: NEWS_TYPES.SET_PAGE_NUMBER,
    payload: page,
  };
};

const setSearchRequest = (request) => {
  return {
    type: NEWS_TYPES.SET_SEARCH_REQUEST,
    payload: request,
  };
};

const setPageSize = (size) => {
  return {
    type: NEWS_TYPES.SET_PAGE_SIZE,
    payload: size,
  };
};

const setSortType = (type) => {
  return {
    type: NEWS_TYPES.SET_SORT_TYPE,
    payload: type,
  };
};

const setNewsLocal = (type) => {
  return {
    type: NEWS_TYPES.SET_NEWS_LOCAL,
    payload: type,
  };
};

const setError = (state) => {
  return {
    type: NEWS_TYPES.SET_ERROR,
    payload: state,
  };
};

export {
  fetchNews,
  setNewsPage,
  setSearchRequest,
  setPageSize,
  setSortType,
  setNewsLocal,
  setError,
};
