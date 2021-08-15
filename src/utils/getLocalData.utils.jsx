import { get } from './storage.utils';

export default function getLocalDataUtils({
  searchRequest,
  pageNumber,
  pageSize,
  sortType,
}) {
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
}
