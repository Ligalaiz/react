export default async function requestUtils({ setItems, delayUtils, url, set }) {
  setItems([]);

  const response = await fetch(url).catch((e) =>
    console.log('Error: ', e.message),
  );
  let result = await response.json();
  result = await delayUtils(result);

  if (result.status !== 'ok') {
    throw Error(result.message);
  }

  const resultWithID = result.articles.map((item, index) => {
    item.id = `${index}`;
    return item;
  });

  set('items', resultWithID || []);
  setItems(resultWithID || []);
  return result;
}
