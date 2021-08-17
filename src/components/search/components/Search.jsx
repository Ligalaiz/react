import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { set, get, getQueryUtils, hasQueryUtils } from '@/utils';
import getLocalDataUtils from '@/utils/getLocalData.utils';
import getSearchDataUtils from '@/utils/getSearchData.utils';
import restoreQueryUtils from '@/utils/restoreQuery.utils';

import { useDispatch, useSelector } from 'react-redux';
import { addErrorAction } from '@/store/errorReducer';
import { pageSizeAction } from '@/store/pageSizeReducer';
import { pageNumberAction } from '@/store/pageNumberReducer';
import { sortTypeAction } from '@/store/sortTypeReducer';

import SearchResult from './searchResult/SearchResult';
import SearchBar from './searchBar/SearchBar';
import SortBar from './sortBar/SortBar';
import PageBar from './pageBar/PageBar';
import Loader from './loader/Loader';
import '../styles/index.scss';

const Search = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading.loading);
  const error = useSelector((state) => state.error.error);
  const pageSize = useSelector((state) => state.pageSize.pageSize);
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const sortType = useSelector((state) => state.sortType.sortType);

  const [searchRequest, setSearchRequest] = useState('');
  const [pageTotal, setPageTotal] = useState(0);
  const [items, setItems] = useState([]);
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

      dispatch(pageNumberAction(queryData.pageNumber));
      dispatch(pageSizeAction(queryData.pageSize));
      dispatch(sortTypeAction(queryData.sortType));

      getSearchDataUtils({
        searchRequest: queryData.searchRequest,
        pageNumber: queryData.pageNumber,
        pageSize: queryData.pageSize,
        sortType: queryData.sortType,
        setPageTotal,
        setItems,
      });

      setSearchRequest(queryData.searchRequest);
    } else if (localItems) {
      setItems(localItems);
    } else {
      const LocalData = getLocalDataUtils({
        searchRequest,
        pageNumber,
        pageSize,
        sortType,
      });

      restoreQueryUtils({ router, search, requestData: LocalData });
      set('requestData', queryData);

      dispatch(pageNumberAction(LocalData.pageNumber));
      dispatch(pageSizeAction(LocalData.pageSize));
      dispatch(sortTypeAction(LocalData.sortType));

      setSearchRequest(LocalData.searchRequest);

      if (LocalData.searchRequest && localItems.length === 0) {
        getSearchDataUtils({
          searchRequest: LocalData.searchRequest,
          pageNumber: LocalData.pageNumber,
          pageSize: LocalData.pageSize,
          sortType: LocalData.sortType,
          setPageTotal,
          setItems,
        });
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
          <SearchBar
            setSearchRequest={setSearchRequest}
            searchRequest={searchRequest}
            setPageTotal={setPageTotal}
            setItems={setItems}
          />
        </div>
        <div className="sort__wrap">
          <SortBar />
        </div>
        <div className="pageBar__wrap">
          <PageBar pageTotal={pageTotal} items={items} />
        </div>
      </div>
      <div className="output__wrap">
        <SearchResult items={items} />
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
