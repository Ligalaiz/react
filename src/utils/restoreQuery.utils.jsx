const restoreQueryUtils = ({
  searchParams,
  search,
  setSearchParams,
  requestData,
}) => {
  if (search) {
    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams });
  } else if (requestData) {
    const result = {};
    const requestArr = Object.keys(requestData);

    requestArr.forEach((key) => {
      result[`${key}`] = `${requestData[key]}`;
    });
    setSearchParams({ ...result });
  }
};
export { restoreQueryUtils };
