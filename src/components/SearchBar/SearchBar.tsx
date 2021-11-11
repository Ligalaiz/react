/** @jsxImportSource @emotion/react */
import { SearchBtn } from '@components/SearchBtn';
import React, { FC } from 'react';
import * as cl from './SearchBarStyles';
import { SearchField } from '@components/SearchField';
import { SearchCheckbox } from '@components/SearchCheckbox';
import { ISearchBar } from '@src/interfaces';

export const SearchBar: FC<ISearchBar> = ({
  petsAllowed,
  filterText,
  onSearchValue,
  onCheckboxValue,
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target = e.target as typeof e.target & {
      value: string;
    };

    onSearchValue(target.value);
  };

  const handleCheckboxChange = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ): void => {
    const target = e.target as typeof e.target & {
      checked: boolean;
    };
    onCheckboxValue(target.checked);
  };

  return (
    <div className="search__wrap" css={cl.searchWrap}>
      <div className="container">
        <form className="search__form">
          <div className="search__container" css={cl.searchContainer}>
            <SearchField
              filterText={filterText}
              handleSearchChange={handleSearchChange}
            />
            <div css={cl.searchBtnWrap}>
              <SearchBtn disabled={filterText === ''} />
            </div>
          </div>
          <p>
            <SearchCheckbox
              petsAllowed={petsAllowed}
              handleCheckboxChange={handleCheckboxChange}
            />{' '}
          </p>
        </form>
      </div>
    </div>
  );
};
