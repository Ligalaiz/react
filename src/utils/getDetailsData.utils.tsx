import { getQueryUtils } from './getQuery.utils';
import { getUrlUtils, data } from './getUrl.utils';
import { requestUtils } from './request.utils';
import { IArticles } from '@src/interfaces';

export const getDetailsDataUtils = async ({
  setItems,
  search,
  setError,
  searchParams,
}: {
  setItems: (state: IArticles[]) => void;
  search: string;
  setError: any;
  searchParams: URLSearchParams;
}) => {
  const url = getUrlUtils(getQueryUtils(search, undefined, searchParams));

  try {
    await requestUtils({ setItems, url, data });
  } catch (err) {
    setError(err);
  }
};
