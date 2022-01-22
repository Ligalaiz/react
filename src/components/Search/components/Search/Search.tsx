import React, { FC, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { set, get } from '@utils/storage.utils';
import { getQueryUtils } from '@utils/getQuery.utils';
import { getUrlUtils } from '@utils/getUrl.utils';

import { getLocalDataUtils } from '@utils/getLocalData.utils';
import { restoreQueryUtils } from '@utils/restoreQuery.utils';

import { SearchBar } from '@src/components/Search/components/SearchBar';
import { SearchResult } from '@src/components/Search/components/SearchResult';
import { SortBar } from '@src/components/Search/components/SortBar';
import { PageBar } from '@src/components/Search/components/PageBar';
import { Loader } from '@src/components/Search/components/Loader';
import { outputWrap, sortWrap } from './SearchStyle';

import { useAction } from '@src/hooks/useAction';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';

const Search: FC = () => {
  const { searchRequest, loading, error, pageNumber, sortType, pageSize } =
    useTypedUseSelector((state) => state.news);
  const {
    newsRequest,
    setNewsPageNumber,
    setSearchRequest,
    setPageSize,
    setSortType,
    setNewsLocal,
    setError,
  } = useAction();

  const { search } = useLocation<{ search: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    let localItems = get('items');
    if (!localItems) {
      localItems = [];
    }
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

      newsRequest(getUrlUtils(queryData));
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

      if (LocalData.searchRequest && !localItems) {
        newsRequest(getUrlUtils(LocalData));
      }
    }
  }, []);

  return (
    <>
      <div className="control">
        <div className="form__wrap">
          <SearchBar />
        </div>
        <div className="sort__wrap" css={sortWrap}>
          <SortBar />
        </div>
        <PageBar />
      </div>
      <div className="output__wrap" css={outputWrap}>
        <SearchResult />
      </div>
      {error && (
        <div className="message__wrap">
          <div className="message">
            <p>{error}</p>
            <button
              className="message__btn"
              type="button"
              onClick={() => setError({ error: null })}
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
