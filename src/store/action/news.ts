import { Dispatch } from 'redux';
import { data } from '@utils/getUrl.utils';
import { NewsAction, IArticles, NewsTypes, sort } from '@src/interfaces';
import { set } from '@utils/storage.utils';

const fetchNews = (url: string) => {
  return async (dispatch: Dispatch<NewsAction>) => {
    try {
      dispatch({ type: NewsTypes.FETCH_NEWS });

      const response = await fetch(url, data);
      const result = await response.json();

      const resultWithID = result.articles.map(
        (item: IArticles, index: number) => {
          item.id = `${index}`;
          return item;
        },
      );

      setTimeout(() => {
        dispatch({
          type: NewsTypes.FETCH_NEWS_SUCCESS,
          payload: resultWithID,
        });

        set('items', resultWithID || []);
        dispatch({
          type: NewsTypes.SET_TOTAL_PAGE,
          payload: result.total_pages,
        });
      });
    } catch (e) {
      dispatch({
        type: NewsTypes.FETCH_NEWS_ERROR,
        payload: 'Ошибка загрузки новостей',
      });

      dispatch({
        type: NewsTypes.SET_PAGE_NUMBER,
        payload: '1',
      });
    }
  };
};

const setNewsPage = (page: string) => {
  return {
    type: NewsTypes.SET_PAGE_NUMBER,
    payload: page,
  };
};

const setSearchRequest = (request: string) => {
  return {
    type: NewsTypes.SET_SEARCH_REQUEST,
    payload: request,
  };
};

const setNewsLocal = (localData: IArticles[]) => {
  return {
    type: NewsTypes.SET_NEWS_LOCAL,
    payload: localData,
  };
};

const setSortType = (type: sort) => {
  return {
    type: NewsTypes.SET_SORT_TYPE,
    payload: type,
  };
};

const setPageSize = (size: string) => {
  return {
    type: NewsTypes.SET_PAGE_SIZE,
    payload: size,
  };
};

const setError = (state: null | string) => {
  return {
    type: NewsTypes.SET_ERROR,
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
