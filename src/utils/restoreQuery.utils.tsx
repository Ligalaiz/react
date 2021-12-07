import { IDefaultData, IQueryData } from '@src/interfaces';
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
    const defaultData: IDefaultData = {
      searchRequest: '',
      pageNumber: '',
      pageSize: '',
      sortType: 'relevancy',
    };

    Object.keys(requestData).forEach((key) => {
      defaultData[`${key as keyof IDefaultData}`] = `${
        requestData[key as keyof IDefaultData]
      }`;
    });
    setSearchParams({ ...defaultData });
  }
};
