import { IQueryData, IArticles } from '@src/interfaces';

const defaultData: IQueryData = {
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
  const result: IArticles = {
    title: '',
    published_date: '',
    media: '',
    id: '',
  };
  if (search) {
    Object.keys(defaultParam).forEach((param) => {
      result[param] = searchParams.get(param);
    });
  }
  return { ...defaultParam, ...result };
};
