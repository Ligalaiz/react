/** @jsxImportSource @emotion/react */
import React, { FC, useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { set, get } from '@utils/storage.utils';
import { getQueryUtils } from '@utils/getQuery.utils';

import { getLocalDataUtils } from '@utils/getLocalData.utils';
import { getSearchDataUtils } from '@utils/getSearchData.utils';
import { restoreQueryUtils } from '@utils/restoreQuery.utils';

import { SearchBar } from '@src/components/Search/components/SearchBar';
import { SearchResult } from '@src/components/Search/components/SearchResult';
import { SortBar } from '@src/components/Search/components/SortBar';
import { PageBar } from '@src/components/Search/components/PageBar';
import { Loader } from '@src/components/Search/components/Loader';

import { IArticles } from '@src/interfaces';
import { outputWrap, sortWrap } from './SearchStyle';

const Search: FC = () => {
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [sortType, setSortType] = useState<'relevancy' | 'date' | 'rank'>(
    'relevancy',
  );
  const [pageNumber, setPageNumber] = useState<string>('1');
  const [pageTotal, setPageTotal] = useState<number>(0);
  const [pageSize, setPageSize] = useState<string>('1');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ [key: string]: any } | null>(null);
  const [items, setItems] = useState<IArticles[]>([]);
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
      setSortType(queryData.sortType);
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
      setSortType(LocalData.sortType);

      if (LocalData.searchRequest && !localItems) {
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
            setItems={setItems}
          />
        </div>
        <div className="sort__wrap" css={sortWrap}>
          <SortBar setSortType={setSortType} sortType={sortType} />
        </div>
        <PageBar
          items={items}
          pageTotal={pageTotal}
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
      <div className="output__wrap" css={outputWrap}>
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

export { Search };
