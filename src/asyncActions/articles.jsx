import { set, delayUtils } from '@root/utils';
import { addLoadingAction } from '@root/store/loadingReducer';
import { pageTotalAction } from '@root/store/pageTotalReducer';
import { itemsAction } from '../store/itemsReducer';

export const fetchArticles = ({ url, pageSize }) => {
  return async function (dispatch) {
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

    set('items', resultWithID);

    dispatch(pageTotalAction(Math.floor(result.totalResults / pageSize)));
    dispatch(itemsAction(resultWithID));
    dispatch(addLoadingAction(false));
  };
};
