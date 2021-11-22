/** @jsxImportSource @emotion/react */
import { Loader } from '@components/Loader';
import { SortBar } from '@components/SortBar';
import { PageBar } from '@components/PageBar';
import { SearchBar } from '@components/SearchBar';
import { SearchResult } from '@components/SearchResult';
import { IArticles } from '@src/interfaces';
import React, { FC, useState } from 'react';
import { outputWrap, sortWrap } from './AppStyle';

export const App: FC = () => {
  const [searchRequest, setSearchRequest] = useState<string>('');
  const [items, setItems] = useState<IArticles[]>([]);
  const [sortType, setSortType] = useState<'relevancy' | 'date' | 'rank'>(
    'relevancy',
  );
  const [pageSize, setPageSize] = useState<string>('1');
  const [pageNumber, setPageNumber] = useState<string>('1');
  const [pageTotal, setPageTotal] = useState<number>(0);
  const [error, setError] = useState<{ [key: string]: any } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
            setItems={setItems}
            sortType={sortType}
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
