export function getUrlUtils({ searchRequest, pageSize, sortType, pageNumber }) {
  return `${process.env.BASE_PATH}${process.env.SEARCH_PATH}?${process.env.SEARCH_PARAM}${searchRequest}&${process.env.SEARCH_PAGE_SIZE}${pageSize}&${process.env.SEARCH_SORT}${sortType}&${process.env.SEARCH_PAGE_NUMBER}${pageNumber}`;
}

export const data = {
  method: 'GET',
  headers: {
    'x-api-key': `${process.env.API_KEY}`,
  },
};
