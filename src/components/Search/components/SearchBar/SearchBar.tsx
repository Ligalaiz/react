/** @jsxImportSource @emotion/react */
import { SearchForm } from '@src/components/Search/components/SearchForm';
import { ISearchBar } from '@src/interfaces';
import React, { FC } from 'react';
import { searchWrap } from './SearchBarStyle';
import { useSearchParams } from 'react-router-dom';
import { get, set } from '@utils/storage.utils';
import { getSearchDataUtils } from '@utils/getSearchData.utils';

export const SearchBar: FC<ISearchBar> = (props) => {
  const { requestData, setSearchRequest } = props;
  const { searchRequest } = requestData;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      const requestLocalData = get('requestData');

      set('requestData', { ...requestLocalData, searchRequest });
      getSearchDataUtils(props);

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
