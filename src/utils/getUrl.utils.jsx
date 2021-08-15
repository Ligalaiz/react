import getDateUtils from './getDate.utils';

const currentDate = getDateUtils();

export default function getUrlUtils({
  searchRequest,
  pageSize,
  sortType,
  pageNumber,
}) {
  return `${process.env.BASE_PATH}${process.env.SEARCH_PATH}?${process.env.SEARCH_PARAM}${searchRequest}&${process.env.SEARCH_FROM}${currentDate}&${process.env.SEARCH_PAGE_SIZE}${pageSize}&${process.env.SEARCH_SORT}${sortType}&${process.env.SEARCH_PAGE_NUMBER}${pageNumber}&${process.env.SEARCH_API_KEY}${process.env.API_KEY3}`;
}
