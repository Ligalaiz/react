import { css } from '@emotion/react';

export const cardWrap = css`
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-width: 880px;
  padding: 15px;
  margin: 0 auto;
`;

export const formWrap = css`
  max-width: 880px;
  padding: 15px;
  margin: 0 auto;
  min-width: 320px;
`;

export const formTitle = css`
  margin: 45px auto 3px 0;

  font-family: 'Roboto Medium', sans-serif;
  font-size: 3rem;
  text-align: left;
  font-weight: 500;
`;

export const formSubtitle = css`
  margin-bottom: 45px;
  max-width: 415px;

  color: var(--secondary-color);
  font-size: 1rem;
  font-style: italic;
`;
