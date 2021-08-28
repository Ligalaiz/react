import { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { set, get, getQueryUtils, hasQueryUtils } from '@root/utils';
import getLocalDataUtils from '@root/utils/getLocalData.utils';
import getSearchDataUtils from '@root/utils/getSearchData.utils';
import restoreQueryUtils from '@root/utils/restoreQuery.utils';

import { searchRequestAction } from '@root/store/searchRequestReducer';
import { pageNumberAction } from '@root/store/pageNumberReducer';
import { sortTypeAction } from '@root/store/sortTypeReducer';
import { pageSizeAction } from '@root/store/pageSizeReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addErrorAction } from '@root/store/errorReducer';
import { itemsAction } from '@root/store/itemsReducer';

import SearchResult from './searchResult/SearchResult';
import SearchBar from './searchBar/SearchBar';
import SortBar from './sortBar/SortBar';
import PageBar from './pageBar/PageBar';
import Loader from './loader/Loader';
import '../styles/index.scss';

const Search = () => {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const pageSize = useSelector((state) => state.pageSize.pageSize);
  const sortType = useSelector((state) => state.sortType.sortType);
  const loading = useSelector((state) => state.loading.loading);
  const error = useSelector((state) => state.error.error);
  const searchRequest = useSelector(
    (state) => state.searchRequest.searchRequest,
  );
  const { search } = useLocation();
  const router = useHistory();

  useEffect(() => {
    const localItems = get('items');
    const queryData = getQueryUtils(search, {
      searchRequest,
      pageNumber,
      pageSize,
      sortType,
    });

    if (search && hasQueryUtils(search, 'searchRequest')) {
      set('requestData', queryData);

      dispatch(searchRequestAction(queryData.searchRequest));
      dispatch(pageNumberAction(queryData.pageNumber));
      dispatch(pageSizeAction(queryData.pageSize));
      dispatch(sortTypeAction(queryData.sortType));

      getSearchDataUtils(
        {
          searchRequest: queryData.searchRequest,
          pageNumber: queryData.pageNumber,
          pageSize: queryData.pageSize,
          sortType: queryData.sortType,
        },
        dispatch,
      );
    } else if (localItems) {
      dispatch(itemsAction(localItems));
    } else {
      const LocalData = getLocalDataUtils({
        searchRequest,
        pageNumber,
        pageSize,
        sortType,
      });

      restoreQueryUtils({ router, search, requestData: LocalData });
      set('requestData', queryData);

      dispatch(searchRequestAction(LocalData.searchRequest));
      dispatch(pageNumberAction(LocalData.pageNumber));
      dispatch(pageSizeAction(LocalData.pageSize));
      dispatch(sortTypeAction(LocalData.sortType));

      if (LocalData.searchRequest && localItems.length === 0) {
        getSearchDataUtils(
          {
            searchRequest: LocalData.searchRequest,
            pageNumber: LocalData.pageNumber,
            pageSize: LocalData.pageSize,
            sortType: LocalData.sortType,
          },
          dispatch,
        );
      }
    }
  }, []);

  function handleErrorClick() {
    dispatch(addErrorAction(null));
  }

  return (
    <>
      <div className="control">
        <div className="form__wrap">
          <SearchBar />
        </div>
        <div className="sort__wrap">
          <SortBar />
        </div>
        <div className="pageBar__wrap">
          <PageBar />
        </div>
      </div>
      <div className="output__wrap">
        <SearchResult />
      </div>
      {error && (
        <div className="message__wrap">
          <div className="message">
            <p>{error.message}</p>
            <button
              className="message__btn"
              type="button"
              onClick={handleErrorClick}
            >
              close
            </button>
          </div>
        </div>
      )}
      {loading && <Loader />}
    </>
  );
};

export default Search;
