import { set, delayUtils, getUrlUtils, data } from '@/utils';
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

    const result = await requestUtils({ setItems, delayUtils, url, set }, data);
    const pages = result.total_pages;

    setPageTotal(pages);
    setLoading(false);
  } catch (err) {
    setError(err);
    setLoading(false);
    setPageNumber('1');
  }
}
