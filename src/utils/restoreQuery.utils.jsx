export default function restoreQueryUtils({ router, search, requestData }) {
  let currentQuery;
  if (search) {
    currentQuery = search;
  } else {
    const requestArr = Object.keys(requestData);

    currentQuery = `?${requestArr
      .map((key) => `${key}=${requestData[key]}`)
      .join('&')}`;
  }
  router.push(`${currentQuery}`);
}
