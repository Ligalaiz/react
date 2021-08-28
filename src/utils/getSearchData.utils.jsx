import { getUrlUtils } from '@root/utils';
import { addErrorAction } from '@root/store/errorReducer';
import { pageNumberAction } from '@root/store/pageNumberReducer';
import { addLoadingAction } from '@root/store/loadingReducer';
import { fetchArticles } from '@root/asyncActions/articles';

export default async function getSearchDataUtils(
  { searchRequest, pageNumber, sortType, pageSize },
  dispatch,
) {
  const url = getUrlUtils({ searchRequest, pageSize, sortType, pageNumber });

  try {
    dispatch(addLoadingAction(true));
    dispatch(fetchArticles({ url, pageSize }));
  } catch (err) {
    dispatch(addLoadingAction(false));
    dispatch(addErrorAction(err));
    dispatch(pageNumberAction('1'));
  }
}
