import { css } from '@emotion/react';

export const articleStyle = css`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  gap: 2rem;

  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  }
  @media (max-width: 800px) {
    min-width: 300px;
    flex-wrap: wrap;
  }
`;

export const articleDescription = css`
  max-width: 800px;
`;

export const articleImageWrap = css`
  max-width: 300px;
`;

export const articleImage = css`
  min-width: 300px;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;
