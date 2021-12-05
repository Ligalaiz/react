/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { pageNumberStyle } from './PageNumberStyles';
import { useSearchParams } from 'react-router-dom';
import { get, set } from '@utils/storage.utils';

import { useAction } from '@src/hooks/useAction';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';

const PageNumber: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageNumber, pageTotal } = useTypedUseSelector((state) => state.news);
  const { setNewsPage } = useAction();

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

    setNewsPage(currentNumber);

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
