import { css } from '@emotion/react';

export const optionWrap = css`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
`;

export const fileWrap = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3.5rem;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const fileField = css`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
  @media (max-width: 712px) {
    flex-wrap: wrap;
  }
`;
