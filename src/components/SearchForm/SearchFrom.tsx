/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import {
  searchBtn,
  searchField,
  searchContainer,
} from './SearchFormStyle';
import { ISearchForm } from '@src/interfaces';

export const SearchForm: FC<ISearchForm> = ({
  handleSubmit,
  searchRequest,
  handleSearchChange,
}) => {
  return (
    <form
      className="search__form"
      onSubmit={handleSubmit}
      data-testid="searchBar"
    >
      <div className="search__container" css={searchContainer}>
        <input
          className="search__field"
          data-testid="searchInput"
          css={searchField}
          placeholder="Start your search"
          value={searchRequest}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          data-testid="searchBtn"
          className="search__btn"
          css={searchBtn}
          disabled={parseInt(searchRequest) < 3}
        />
      </div>
    </form>
  );
};
