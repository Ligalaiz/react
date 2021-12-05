import { css } from '@emotion/react';

export const sortWrap = css`
  display: flex;
  max-width: 300px;
`;

export const outputWrap = css`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;
