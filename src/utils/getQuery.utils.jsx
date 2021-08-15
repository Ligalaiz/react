export default function getQueryUtils(search, defaultParam = {}) {
  let result = {};
  if (search) {
    const queries = search;

    result = queries
      .slice(1)
      .split('&')
      .map((query) => query.split('='))
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});
  }
  return { ...defaultParam, ...result };
}
