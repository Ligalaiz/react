import React, { FC } from 'react';
import { PageSize } from '@src/components/Search/components/PageSize';
import { PageNumber } from '@src/components/Search/components/PageNumber';
import { PageTotal } from '@src/components/Search/components/PageTotal';
import { pageBarWrap } from './PageBarStyles';

const PageBar: FC = () => {
  return (
    <div className="pageBar__wrap" css={pageBarWrap}>
      <PageSize />
      <PageNumber />
      <PageTotal />
    </div>
  );
};

export { PageBar };
