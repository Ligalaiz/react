import { set, getQueryUtils, delayUtils, getUrlUtils, data } from '@/utils';
import requestUtils from '@/utils/request.utils';

export default async function getDetailsDataUtils({
  setItems,
  search,
  setError,
  searchParams,
}) {
  const { pageNumber, searchRequest, pageSize, sortType } = getQueryUtils(
    search,
    undefined,
    searchParams,
  );
  console.log({ pageNumber, searchRequest, pageSize, sortType });
  const url = getUrlUtils({ searchRequest, pageSize, sortType, pageNumber });

  try {
    await requestUtils({ setItems, delayUtils, url, set }, data);
  } catch (err) {
    setError(err);
  }
}
