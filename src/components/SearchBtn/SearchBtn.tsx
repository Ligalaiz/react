/** @jsxImportSource @emotion/react */
import { ISearchBtn } from '@src/interfaces';
import React, { FC } from 'react';
import { SearchBtnStyled } from './ButtonStyles';

export const SearchBtn: FC<ISearchBtn> = (props) => {
  return (
    <SearchBtnStyled
      type="button"
      className="search__btn"
      data-testid="searchBtn"
      {...props}
    />
  );
};
