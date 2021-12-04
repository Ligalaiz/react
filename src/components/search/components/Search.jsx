import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { set, get, getQueryUtils, getUrlUtils } from '@/utils';
import getLocalDataUtils from '@/utils/getLocalData.utils';
import restoreQueryUtils from '@/utils/restoreQuery.utils';
import SearchBar from './searchBar/SearchBar';
import SearchResult from './searchResult/SearchResult';
import SortBar from './sortBar/SortBar';
import PageBar from './pageBar/PageBar';
import Loader from './loader/Loader';
import { useAction } from '@/hooks/useAction';
import '../styles/index.scss';

const App = () => {
  const { searchRequest, loading, error, pageNumber, sortType, pageSize } =
    useSelector((state) => state.news);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const {
    fetchNews,
    setNewsPage,
    setSearchRequest,
    setPageSize,
    setSortType,
    setNewsLocal,
    setError,
  } = useAction();

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
      fetchNews(getUrlUtils(queryData));
      setNewsPage(queryData.pageNumber);
      setSearchRequest(queryData.searchRequest);
      setPageSize(queryData.pageSize);
      setSortType(queryData.sortType);
    } else if (localItems) {
      setNewsLocal(localItems);

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
      setNewsPage(LocalData.pageNumber);
      setPageSize(LocalData.pageSize);
      setSortType(LocalData.sortType);

      if (LocalData.searchRequest && localItems.length === 0) {
        fetchNews(getUrlUtils(LocalData));
      }
    }
  }, []);

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
            <p>{error}</p>
            <button
              className="message__btn"
              type="button"
              onClick={() => {
                setError(null);
              }}
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
