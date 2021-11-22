/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { IPageNumber } from '@src/interfaces';
import { pageNumberStyle } from './PageNumberStyles';

export const PageNumber: FC<IPageNumber> = ({
  pageTotal,
  pageNumber,
  setPageNumber,
}) => {
  function handlerChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target as typeof e.target & {
      value: number;
    };
    let currentNumber: string;
    if (target.value < 0) {
      currentNumber = '1';
    } else if (target.value > pageTotal) {
      return;
    } else {
      currentNumber = target.value;
    }
    setPageNumber(currentNumber);
  }

  return (
    <div className="pageNumber__wrap">
      <label>
        <input
          className="pageNumber"
          data-testid="pageNumber"
          css={pageNumberStyle}
          name="pageNumber"
          type="number"
          value={pageNumber}
          onChange={handlerChange}
        />
      </label>
    </div>
  );
};
