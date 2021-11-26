import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { set, get, getQueryUtils } from '@/utils';

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

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const localItems = get('items');
    const queryData = getQueryUtils(
      search,
      {
        searchRequest,
        pageNumber,
        pageSize,
        sortType,
      },
      searchParams,
    );
    const LocalData = getLocalDataUtils({
      searchRequest,
      pageNumber,
      pageSize,
      sortType,
    });

    if (search && searchParams.get('searchRequest')) {
      set('requestData', queryData);

      getSearchDataUtils({
        requestData: queryData,
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
      restoreQueryUtils({
        searchParams,
        setSearchParams,
        search,
        requestData: LocalData,
      });
    } else {
      restoreQueryUtils({
        searchParams,
        setSearchParams,
        search,
        requestData: LocalData,
      });

      set('requestData', queryData);
      setSearchRequest(LocalData.searchRequest);
      setPageNumber(LocalData.pageNumber);
      setPageSize(LocalData.pageSize);
      setSortTipe(LocalData.sortType);

      if (LocalData.searchRequest && localItems.length === 0) {
        getSearchDataUtils({
          requestData: LocalData,
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
            requestData={{ searchRequest, pageNumber, pageSize, sortType }}
            setLoading={setLoading}
            setError={setError}
            setSearchRequest={setSearchRequest}
            setPageTotal={setPageTotal}
            setPageNumber={setPageNumber}
            setSortTipe={setSortTipe}
            setItems={setItems}
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
