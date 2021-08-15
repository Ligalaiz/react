import { set, getQueryUtils, delayUtils, getUrlUtils } from '@/utils';
import requestUtils from '@/utils/request.utils';

export default async function getDetailsDataUtils({
  setItems,
  search,
  setError,
}) {
  const { pageNumber, searchRequest, pageSize, sortType } =
    getQueryUtils(search);

  const url = getUrlUtils({ searchRequest, pageSize, sortType, pageNumber });

  try {
    await requestUtils({ setItems, delayUtils, url, set });
  } catch (err) {
    setError(err);
  }
}
