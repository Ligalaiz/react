import { css } from '@emotion/react';

export const apartmentWrap = css`
  grid-area: apartment;
`;

export const apartmentGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;
