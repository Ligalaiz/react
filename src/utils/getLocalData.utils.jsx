import { get } from './storage.utils';

export default function getLocalDataUtils(
  { searchRequest, pageNumber, pageSize, sortType },
  testLocalData,
) {
  let requestData = {
    searchRequest,
    pageNumber,
    pageSize,
    sortType,
  };

  const localData = testLocalData || get('requestData');
  if (localData) {
    requestData = { ...requestData, ...localData };
  }

  return requestData;
}
