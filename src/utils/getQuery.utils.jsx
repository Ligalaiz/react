export function getQueryUtils(
  search,
  defaultParam = {
    searchRequest: '',
    pageNumber: '',
    pageSize: '',
    sortType: '',
  },
  searchParams,
) {
  let result = {};
  if (search) {
    Object.keys(defaultParam).forEach((param) => {
      result[param] = searchParams.get(param);
    });
  }
  return { ...defaultParam, ...result };
}
