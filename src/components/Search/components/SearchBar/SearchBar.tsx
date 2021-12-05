/** @jsxImportSource @emotion/react */
import { SearchForm } from '@src/components/Search/components/SearchForm';
import React, { FC } from 'react';
import { searchWrap } from './SearchBarStyle';
import { get, set } from '@utils/storage.utils';
import { getUrlUtils } from '@utils/getUrl.utils';
import { useSearchParams } from 'react-router-dom';

import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';

const SearchBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchRequest, pageNumber, pageSize, sortType } = useTypedUseSelector(
    (state) => state.news,
  );
  const { fetchNews, setSearchRequest } = useAction();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      const requestLocalData = get('requestData');

      set('requestData', { ...requestLocalData, searchRequest });

      fetchNews(getUrlUtils({ searchRequest, pageNumber, pageSize, sortType }));
      const latestPrams = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...latestPrams, searchRequest });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value) {
      setSearchRequest(value);
    }
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

export { SearchBar };
