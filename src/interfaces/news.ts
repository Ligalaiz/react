import { IArticles, sort } from './interfaces';

export interface INewsState {
  news: IArticles[];
  loading: boolean;
  error: null | string;
  pageTotal: number;
  pageNumber: string;
  searchRequest: string;
  sortType: sort;
  pageSize: string;
}

export enum NewsTypes {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
  SET_PAGE_NUMBER = 'SET_PAGE_NUMBER',
  SET_NEWS_LOCAL = 'SET_NEWS_LOCAL',
  SET_SORT_TYPE = 'SET_SORT_TYPE',
  SET_PAGE_SIZE = 'SET_PAGE_SIZE',
  SET_TOTAL_PAGE = 'SET_TOTAL_PAGE',
  SET_SEARCH_REQUEST = 'SET_SEARCH_REQUEST',
  SET_ERROR = 'SET_ERROR',
}

interface fetchNewsAction {
  type: NewsTypes.FETCH_NEWS;
}

interface fetchNewsActionSuccess {
  type: NewsTypes.FETCH_NEWS_SUCCESS;
  payload: IArticles[];
}

interface fetchNewsActionError {
  type: NewsTypes.FETCH_NEWS_ERROR;
  payload: null | string;
}

interface setPageNumberAction {
  type: NewsTypes.SET_PAGE_NUMBER;
  payload: string;
}

interface setSearchRequestAction {
  type: NewsTypes.SET_SEARCH_REQUEST;
  payload: string;
}

interface setNewsLocalAction {
  type: NewsTypes.SET_NEWS_LOCAL;
  payload: IArticles[];
}

interface setSortTypeAction {
  type: NewsTypes.SET_SORT_TYPE;
  payload: sort;
}

interface setPageSizeAction {
  type: NewsTypes.SET_PAGE_SIZE;
  payload: string;
}

interface setTotalPageAction {
  type: NewsTypes.SET_TOTAL_PAGE;
  payload: number;
}

interface setErrorAction {
  type: NewsTypes.SET_ERROR;
  payload: null | string;
}

export type NewsAction =
  | fetchNewsAction
  | fetchNewsActionSuccess
  | fetchNewsActionError
  | setPageNumberAction
  | setSearchRequestAction
  | setNewsLocalAction
  | setSortTypeAction
  | setPageSizeAction
  | setTotalPageAction
  | setErrorAction;
