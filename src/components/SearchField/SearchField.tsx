/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { SearchFieldStyled } from './SearchFieldStyles';
import { ISearchField } from '@src/interfaces';

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
