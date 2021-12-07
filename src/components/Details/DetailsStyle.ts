import { css } from '@emotion/react';
import { color } from '@src/styles';

export const detailsLink = css`
  color: ${color['black-color']};
`;

export const articleStyle = css`
  display: flex;
  padding: 30px 10px;
  justify-content: flex-start;
  gap: 2rem;

  color: #080808;

  transition: all 0.2s linear;
  @media (max-width: 800px) {
    min-width: 300px;
    flex-wrap: wrap;
  }
`;

export const articleWrap = css`
  min-width: 320px;
  padding: 0 10px;
`;

export const articleImage = css`
  min-width: 300px;
  border-radius: 15px;
  @media (max-width: 800px) {
    margin: 0 auto;
  }
`;

export const articleDescription = css`
  max-width: 800px;
`;

export const articleTitle = css`
  margin-bottom: 10px;
`;

export const articleContent = css`
  margin-bottom: 20px;

  text-align: justify;
  color: ${color['black-color']};
`;
