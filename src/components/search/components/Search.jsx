import React, { useEffect } from 'react';
import { useAction } from '@root/hooks/useAction';
import { get, getQueryUtils, getUrlUtils, set } from '@root/utils';
import { getLocalDataUtils } from '@root/utils/getLocalData.utils';
import { restoreQueryUtils } from '@root/utils/restoreQuery.utils';
import { useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';
import '../styles/index.scss';
import { Loader } from './loader/Loader';
import { PageBar } from './pageBar/PageBar';
import { SearchBar } from './searchBar/SearchBar';
import { SearchResult } from './searchResult/SearchResult';
import { SortBar } from './sortBar/SortBar';

const Search = () => {
  const { searchRequest, loading, error, pageNumber, sortType, pageSize } =
    useSelector((state) => state.news);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();

  const {
    newsRequestAction,
    setNewsPageNumber,
    setSearchRequest,
    setPageSize,
    setSortType,
    setNewsLocal,
    setError,
  } = useAction();

  useEffect(() => {
    const localItems = get('items') || [];
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
      newsRequestAction(getUrlUtils(queryData));
      setNewsPageNumber({ pageNumber: queryData.pageNumber });
      setSearchRequest({ searchRequest: queryData.searchRequest });
      setPageSize({ pageSize: queryData.pageSize });
      setSortType({ sortType: queryData.sortType });
    } else if (localItems) {
      setNewsLocal({ news: localItems });

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
      setSearchRequest({ searchRequest: LocalData.searchRequest });
      setNewsPageNumber({ pageNumber: LocalData.pageNumber });
      setPageSize({ pageSize: LocalData.pageSize });
      setSortType({ sortType: LocalData.sortType });

      if (LocalData.searchRequest && localItems.length === 0) {
        newsRequestAction(getUrlUtils(LocalData));
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
                setError({ error: null });
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

export { Search };
