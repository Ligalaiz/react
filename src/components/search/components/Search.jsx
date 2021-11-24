import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { set, get, getQueryUtils, hasQueryUtils } from '@/utils';

import getLocalDataUtils from '@/utils/getLocalData.utils';
import getSearchDataUtils from '@/utils/getSearchData.utils';
import restoreQueryUtils from '@/utils/restoreQuery.utils';

import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';
import SortBar from './sortBar/SortBar';
import PageBar from './pageBar/PageBar';
import Loader from './loader/Loader';
import '../styles/index.scss';

const App = () => {
  const [searchRequest, setSearchRequest] = useState('');
  const [sortType, setSortTipe] = useState('relevancy');
  const [pageNumber, setPageNumber] = useState('1');
  const [pageTotal, setPageTotal] = useState(0);
  const [pageSize, setPageSize] = useState('1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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

      getSearchDataUtils({
        searchRequest: queryData.searchRequest,
        pageNumber: queryData.pageNumber,
        pageSize: queryData.pageSize,
        sortType: queryData.sortType,
        setPageNumber,
        setPageTotal,
        setLoading,
        setItems,
        setError,
      });

      setSearchRequest(queryData.searchRequest);
      setPageNumber(queryData.pageNumber);
      setPageSize(queryData.pageSize);
      setSortTipe(queryData.sortType);
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

      setSearchRequest(LocalData.searchRequest);
      setPageNumber(LocalData.pageNumber);
      setPageSize(LocalData.pageSize);
      setSortTipe(LocalData.sortType);

      if (LocalData.searchRequest && localItems.length === 0) {
        getSearchDataUtils({
          searchRequest: LocalData.searchRequest,
          pageNumber: LocalData.pageNumber,
          pageSize: LocalData.pageSize,
          sortType: LocalData.sortType,
          setPageNumber,
          setPageTotal,
          setLoading,
          setItems,
          setError,
        });
      }
    }
  }, []);

  return (
    <>
      <div className="control">
        <div className="form__wrap">
          <SearchBar
            setLoading={setLoading}
            setError={setError}
            searchRequest={searchRequest}
            setSearchRequest={setSearchRequest}
            setPageTotal={setPageTotal}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            pageSize={pageSize}
            setSortTipe={setSortTipe}
            setItems={setItems}
            sortType={sortType}
          />
        </div>
        <div className="sort__wrap">
          <SortBar setSortTipe={setSortTipe} sortType={sortType} />
        </div>
        <div className="pageBar__wrap">
          <PageBar
            items={items}
            pageTotal={pageTotal}
            pageSize={pageSize}
            setPageSize={setPageSize}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
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
              onClick={() => setError(null)}
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

export default App;
