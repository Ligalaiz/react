import { IData, IQueryData } from '@src/interfaces';

export const getUrlUtils = (requestData: IQueryData) => {
  const { searchRequest, pageNumber, pageSize, sortType } = requestData;

  return `${process.env.BASE_PATH}${process.env.SEARCH_PATH}?${process.env.SEARCH_PARAM}${searchRequest}&${process.env.SEARCH_PAGE_SIZE}${pageSize}&${process.env.SEARCH_SORT}${sortType}&${process.env.SEARCH_PAGE_NUMBER}${pageNumber}`;
};

export const data = (): IData => ({
  method: 'GET',
  headers: {
    'x-api-key': `${process.env.API_KEY}`,
  },
});
