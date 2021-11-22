/** @jsxImportSource @emotion/react */
import { ISortBar } from '@src/interfaces';
import React, { FC } from 'react';
import { SortBtn } from './SortBarStyle';

export const SortBar: FC<ISortBar> = ({ sortType, setSortType }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as typeof e.target & {
      name: 'relevancy' | 'date' | 'rank';
    };
    setSortType(target.name);
  };

  return (
    <>
      <SortBtn
        className="sort__btn sort__btn--left"
        name="relevancy"
        direction="left"
        data-testid="sortBtnLeft"
        sortType={sortType === 'relevancy'}
        type="button"
        onClick={handleClick}
      >
        relevancy
      </SortBtn>
      <SortBtn
        className="sort__btn sort__btn--center"
        name="date"
        direction="center"
        data-testid="sortBtnCenter"
        sortType={sortType === 'date'}
        type="button"
        onClick={handleClick}
      >
        date
      </SortBtn>
      <SortBtn
        className="sort__btn sort__btn--right"
        name="rank"
        direction="right"
        data-testid="sortBtnRight"
        sortType={sortType === 'rank'}
        type="button"
        onClick={handleClick}
      >
        rank
      </SortBtn>
    </>
  );
};
