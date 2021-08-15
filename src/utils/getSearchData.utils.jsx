import { set, delayUtils, getUrlUtils } from '@/utils';
import requestUtils from '@/utils/request.utils';

export default async function getSearchDataUtils({
  setPageNumber,
  searchRequest,
  setPageTotal,
  setLoading,
  pageNumber,
  setItems,
  sortType,
  setError,
  pageSize,
}) {
  const url = getUrlUtils({ searchRequest, pageSize, sortType, pageNumber });

  try {
    setLoading(true);

    const result = await requestUtils({ setItems, delayUtils, url, set });
    const pages = Math.floor(result.totalResults / pageSize);

    setPageTotal(pages);
    setLoading(false);
  } catch (err) {
    setError(err);
    setLoading(false);
    setPageNumber('1');
  }
}
