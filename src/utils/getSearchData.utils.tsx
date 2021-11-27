import { getUrlUtils, data } from './getUrl.utils';
import { requestUtils } from './request.utils';
import { IGetSearchDataUtils } from '@src/interfaces';

export const getSearchDataUtils = async ({
  requestData,
  setPageNumber,
  setPageTotal,
  setLoading,
  setItems,
  setError,
}: IGetSearchDataUtils) => {
  const url = getUrlUtils(requestData);

  try {
    setLoading(true);
    const result = await requestUtils({ setItems, url, data });
    const pages = result.total_pages;

    setPageTotal(pages);
    setLoading(false);
  } catch (err: any) {
    setError(err);
    setLoading(false);
    setPageNumber('1');
  }
};
