export default function hasQueryUtils(querys, param) {
  const temp = querys
    .slice(1)
    .split('&')
    .map((query) => query.split('='))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  return temp[param];
}
