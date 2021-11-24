export default function setQueryUtils({ search, router, param, paramValue }) {
  const oldQueries = search;
  let isQuery = true;

  const temp = oldQueries
    .slice(1)
    .split('&')
    .map((query) => query.split('='));

  for (const item of temp) {
    if (item[0] === param) {
      isQuery = false;
      item[1] = paramValue;
    }
  }

  if (isQuery) {
    temp.push([param, paramValue]);
  }

  const newQueries = temp.map((query) => query.join('=')).join('&');
  router.push(`?${newQueries}`);
}
