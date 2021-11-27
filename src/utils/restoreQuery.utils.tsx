import { IQueryData, IArticles } from '@src/interfaces';
import { URLSearchParamsInit } from 'react-router-dom';

export const restoreQueryUtils = ({
  searchParams,
  search,
  setSearchParams,
  requestData,
}: {
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: any;
        }
      | undefined,
  ) => void;
  requestData: IQueryData;
  search: string;
  searchParams: URLSearchParams;
}) => {
  if (search) {
    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams });
  } else if (requestData) {
    const result: IArticles = {
      title: '',
      published_date: '',
      media: '',
      id: '',
    };

    Object.keys(requestData).forEach((key) => {
      result[`${key}`] = `${requestData[key as keyof IQueryData]}`;
    });
    setSearchParams({ ...result });
  }
};
