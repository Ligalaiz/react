import React, { FC } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { pageTotalStyle } from './PageTotalStyle';

const PageTotal: FC = () => {
  const { pageTotal } = useTypedUseSelector((state) => state.news);
  return (
    <div className="pageTotal" css={pageTotalStyle} data-testid="pageTotal">
      <p>{pageTotal}</p>
    </div>
  );
};

export { PageTotal };
