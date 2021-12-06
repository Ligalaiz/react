import { get } from './storage.utils';

const getLocalDataUtils = ({
  searchRequest,
  pageNumber,
  pageSize,
  sortType,
}) => {
  let requestData = {
    searchRequest,
    pageNumber,
    pageSize,
    sortType,
  };

  const localData = get('requestData');
  if (localData) {
    requestData = { ...requestData, ...localData };
  }

  return requestData;
};

export { getLocalDataUtils };
