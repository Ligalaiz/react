/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { SearchBtnStyled } from './ButtonStyles';
import { ISearchBtn } from '@src/interfaces';


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
