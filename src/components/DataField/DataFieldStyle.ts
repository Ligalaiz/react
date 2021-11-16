import { css } from '@emotion/react';

export const formField = css`
  height: 47px;
  width: 100%;
  max-width: 850px;
  padding: 10px;
  border: 1px solid var(--primary-color);

  font-size: 18px;
  color: var(--primary-color);

  outline: none;
  background-color: transparent;

  transition: all 0.2s linear;
  &:focus {
    background-color: var(--bg-color);
  }

  &::placeholder {
    color: var(--secondary-color);
  }
`;

export const formNotice = css`
  transition: all 0.2s linear;
`;
