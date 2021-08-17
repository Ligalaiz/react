import { getUrlUtils } from '@/utils';
import { addErrorAction } from '@/store/errorReducer';
import { pageNumberAction } from '@/store/pageNumberReducer';
import { addLoadingAction } from '@/store/loadingReducer';
import { fetchArticles } from '@/asyncActions/articles';

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
