/** @jsxImportSource @emotion/react */
import { IPageSize } from '@src/interfaces';
import React, { FC } from 'react';
import { pageSizeStyle } from './PageSizeStyle';
import { useSearchParams } from 'react-router-dom';
import { get, set } from '@utils/storage.utils';

const PageSize: FC<IPageSize> = ({ pageSize, setPageSize }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sizeValue = e.target.value;
    setPageSize(sizeValue);

    const requestData = get('requestData');
    set('requestData', { ...requestData, pageSize: sizeValue });

    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams, pageSize: sizeValue });
  };

  return (
    <div className="pageSize__wrap">
      <label>
        <select
          className="pageSize"
          data-testid="pageSize"
          css={pageSizeStyle}
          name="pageSize"
          value={pageSize}
          onChange={handlerChange}
        >
          <option value="1" data-testid="select-option">
            1
          </option>
          <option value="10" data-testid="select-option">
            10
          </option>
          <option value="13" data-testid="select-option">
            30
          </option>
          <option value="50" data-testid="select-option">
            50
          </option>
          <option value="100" data-testid="select-option">
            100
          </option>
        </select>
      </label>
    </div>
  );
};

export { PageSize };