/** @jsxImportSource @emotion/react */
import { SearchForm } from '@components/SearchForm';
import { ISearchBar } from '@src/interfaces';
import { http } from '@utils/http.utils';
import React, { FC } from 'react';
import { searchWrap } from './SearchBarStyle';

export const SearchBar: FC<ISearchBar> = ({
  searchRequest,
  setSearchRequest,
  setItems,
  sortType,
  pageSize,
  pageNumber,
  setPageTotal,
  setPageNumber,
  setError,
  setLoading,
}) => {
  const link = `${process.env.BASE_PATH}${process.env.SEARCH_PATH}?${process.env.SEARCH_PARAM}${searchRequest}&${process.env.SEARCH_PAGE_SIZE}${pageSize}&${process.env.SEARCH_SORT}${sortType}&${process.env.SEARCH_PAGE_NUMBER}${pageNumber}`;

  const data = {
    method: 'GET',
    headers: {
      'x-api-key': `${process.env.API_KEY}`,
    },
  };

  const loadSearchRequest = async (url: string) => {
    try {
      setLoading(true);
      setItems([]);

      const response = await http(url, data);
      const pages = response.total_pages;

      setPageTotal(parseInt(pages, 10));
      setLoading(false);
      setItems(response.articles || []);
    } catch (err: any) {
      setError(err);
      setLoading(false);
      setPageNumber('1');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      loadSearchRequest(link);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target;
    setSearchRequest(value);
  };
  return (
    <>
      <div className="search__wrap" css={searchWrap}>
        <div className="container">
          <SearchForm
            handleSubmit={handleSubmit}
            searchRequest={searchRequest}
            handleSearchChange={handleSearchChange}
          />
        </div>
      </div>
    </>
  );
};
