/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { IPageBar } from '@src/interfaces';
import { PageSize } from '@src/components/Search/components/PageSize';
import { PageNumber } from '@src/components/Search/components/PageNumber';
import { PageTotal } from '@src/components/Search/components/PageTotal';
import { pageBarWrap } from './PageBarStyles';

const PageBar: FC<IPageBar> = ({
  pageSize,
  setPageSize,
  pageNumber,
  setPageNumber,
  pageTotal,
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

export { PageBar };
