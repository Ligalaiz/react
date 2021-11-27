/** @jsxImportSource @emotion/react */
import { IPageTotal } from '@src/interfaces';
import React, { FC } from 'react';
import { pageTotalStyle } from './PageTotalStyle';

const PageTotal: FC<IPageTotal> = ({ pageTotal }) => {
  return (
    <div className="pageTotal" css={pageTotalStyle} data-testid="pageTotal">
      <p>{pageTotal}</p>
    </div>
  );
};

export { PageTotal };
