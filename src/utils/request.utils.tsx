import { delayUtils } from './delay.utils';
import { set } from './storage.utils';
import { IArticles, IData } from '@src/interfaces';

interface IRequestUtils {
  setItems: (state: IArticles[]) => void;
  url: string;
  data: IData;
}

export const requestUtils = async ({ setItems, url, data }: IRequestUtils) => {
  setItems([]);

  const response = await fetch(url, data);
  let result = await response.json();
  result = await delayUtils(result);

  if (result.status !== 'ok') {
    throw Error(result.message);
  }

  const resultWithID = result.articles.map(
    (articles: IArticles, index: number) => {
      articles.id = `${index}`;
      return articles;
    },
  );

  set('items', resultWithID || []);
  setItems(resultWithID || []);
  return result;
};
