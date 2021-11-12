import { ISearchCheckbox } from '@src/interfaces';
import React, { FC } from 'react';
import { SearchCheckboxStyled, searchLabel } from './SearchCheckboxStyles';

export const SearchCheckbox: FC<ISearchCheckbox> = ({
  petsAllowed,
  handleCheckboxChange,
}) => {
  return (
    <>
      <SearchCheckboxStyled
        className="search__checkbox search__checkbox--pets"
        type="checkbox"
        data-testid="searchCheckbox"
        id="searchCheckbox"
        value="yes"
        defaultChecked={petsAllowed}
        onClick={handleCheckboxChange}
      />
      <label htmlFor="searchCheckbox" css={searchLabel}>
        Pets allowed
      </label>
    </>
  );
};
