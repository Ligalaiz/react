/** @jsxImportSource @emotion/react */
import { IPageSize } from '@src/interfaces';
import React, { FC } from 'react';
import { pageSizeStyle } from './PageSizeStyle';

export const PageSize: FC<IPageSize> = ({ pageSize, setPageSize }) => {
  function handlerChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPageSize(e.target.value);
  }

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
