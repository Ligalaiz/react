/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { IPageNumber } from '@src/interfaces';
import { pageNumberStyle } from './PageNumberStyles';
import { useSearchParams } from 'react-router-dom';
import { get, set } from '@utils/storage.utils';

const PageNumber: FC<IPageNumber> = (props) => {
  const { pageTotal, pageNumber, setPageNumber } = props;
  const [searchParams, setSearchParams] = useSearchParams();

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

    const requestData = get('requestData');
    set('requestData', { ...requestData, pageNumber: currentNumber });

    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams, pageNumber: currentNumber });
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

export { PageNumber };
