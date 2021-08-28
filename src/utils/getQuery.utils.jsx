export default function getQueryUtils(search, defaultParam = {}) {
  let result = {};
  if (search) {
    const queries = search;
    const start = queries.indexOf('?') !== -1 ? queries.indexOf('?') + 1 : 0;

    result = queries
      .slice(start)
      .split('&')
      .map((query) => query.split('='))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  }
  return { ...defaultParam, ...result };
}
