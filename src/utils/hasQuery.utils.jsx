export default function hasQueryUtils(queries, param) {
  const temp = queries
    .slice(1)
    .split('&')
    .map((query) => query.split('='))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return temp[param];
}
