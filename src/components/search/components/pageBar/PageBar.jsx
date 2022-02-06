import React from 'react';
import { PageNumber } from '../pageNumber/PageNumber';
import { PageSize } from '../pageSize/PageSize';
import { PageTotal } from '../pageTotal/PageTotal';

const PageBar = () => {
  return (
    <>
      <PageSize />
      <PageNumber />
      <PageTotal />
    </>
  );
};

export { PageBar };
