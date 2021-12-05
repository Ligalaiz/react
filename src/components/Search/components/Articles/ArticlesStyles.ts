import { css } from '@emotion/react';

export const articleStyle = css`
  display: flex;
  padding: 30px 10px;
  justify-content: flex-start;
  gap: 2rem;
  color: #080808;
  transition: all 0.2s linear;
  &:hover {
    box-shadow: 0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%);
  }
  @media (max-width: 800px) {
    min-width: 300px;
    flex-wrap: wrap;
  }
`;

export const articleWrap = css`
  min-width: 320px;
  padding: 0 10px;
`;
export const articleTitle = css`
  margin-bottom: 10px;
`;

export const articleDescription = css`
  max-width: 800px;
`;

export const articleShortDescription = css`
  width: 370px;
  margin-bottom: 20px;

  white-space: nowrap;
  text-overflow: ellipsis;

  overflow: hidden;
`;

export const articleImageWrap = css`
  max-width: 300px;
`;

export const articleImage = css`
  border-radius: 15px;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;
