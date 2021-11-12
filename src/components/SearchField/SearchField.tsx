/** @jsxImportSource @emotion/react */
import { ISearchField } from '@src/interfaces';
import React, { FC } from 'react';
import { SearchFieldStyled } from './SearchFieldStyles';

export const SearchField: FC<ISearchField> = ({
  filterText,
  handleSearchChange,
}) => {
  return (
    <SearchFieldStyled
      className="search__field"
      data-testid="searchField"
      type="text"
      placeholder="Start your search"
      value={filterText}
      onChange={handleSearchChange}
    />
  );
};
