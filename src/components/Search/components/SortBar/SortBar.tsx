/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { SortBtn } from './SortBarStyle';
import { useSearchParams } from 'react-router-dom';
import { get, set } from '@utils/storage.utils';

import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';

export const SortBar: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortType } = useTypedUseSelector((state) => state.news);
  const { setSortType } = useAction();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as typeof e.target & {
      name: 'relevancy' | 'date' | 'rank';
    };
    const sortValue = target.name;

    setSortType(sortValue);

    const requestData = get('requestData');
    set('requestData', { ...requestData, sortType: sortValue });

    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams, sortType: sortValue });
  };

  return (
    <>
      <SortBtn
        className="sort__btn sort__btn--left"
        name="relevancy"
        direction="left"
        data-testid="relevancy"
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
        data-testid="date"
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
        data-testid="rank"
        sortType={sortType === 'rank'}
        type="button"
        onClick={handleClick}
      >
        rank
      </SortBtn>
    </>
  );
};
