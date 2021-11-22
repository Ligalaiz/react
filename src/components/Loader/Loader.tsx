/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';
import { loader } from './LoaderStyles';

export const Loader: FC = () => {
  return (
    <div className="loader" css={loader}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
