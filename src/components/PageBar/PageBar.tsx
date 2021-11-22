/** @jsxImportSource @emotion/react */
import { IPageBar } from '@src/interfaces';
import React, { FC } from 'react';
import { PageSize } from '@components/PageSize';
import { PageNumber } from '@components/PageNumber';
import { PageTotal } from '@components/PageTotal';
import { pageBarWrap } from './PageBarStyles';

export const PageBar: FC<IPageBar> = ({
  pageTotal,
  pageSize,
  setPageSize,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <div className="pageBar__wrap" css={pageBarWrap}>
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      <PageNumber
        pageTotal={pageTotal}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <PageTotal pageTotal={pageTotal} />
    </div>
  );
};
