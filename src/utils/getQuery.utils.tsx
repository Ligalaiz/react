import { IDefaultData } from '@src/interfaces';

const defaultData: IDefaultData = {
  searchRequest: '',
  pageNumber: '',
  pageSize: '',
  sortType: 'relevancy',
};

export const getQueryUtils = (
  search: string,
  defaultParam = defaultData,
  searchParams: URLSearchParams,
) => {
  if (search) {
    Object.keys(defaultParam).forEach((param) => {
      let result;
      const currentValue: null | string = searchParams.get(param);

      if (param === 'sortType') {
        result = currentValue || 'relevancy';
      } else {
        result = currentValue || '';
      }

      defaultData[param as keyof IDefaultData] = result;
    });
  }
  return { ...defaultParam };
};
