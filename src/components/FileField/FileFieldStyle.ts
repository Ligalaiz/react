import { css } from '@emotion/react';
import { color } from '@src/styles';

export const fileLabel = css`
  position: relative;

  display: block;
  padding: 10px;
  border: 1px solid var(--primary-color);
  max-width: 415px;

  font-size: 18px;
  font-weight: 500;

  transition: all 0.2s linear;
  cursor: pointer;

  &::after {
    content: 'Doc/xls/pdf/jpg/zip/rar < 25 Mb';
    position: absolute;
    left: 0;
    bottom: -37px;

    font-size: 14px;
    color: var(--secondary-color);

    visibility: hidden;
    transition: all 0.2s linear;
  }

  &:hover::after {
    visibility: visible;
  }

  &:hover {
    border-color: ${color['black-color']};

    color: ${color['white-color']};

    background: ${color['brand-color']};
  }

  &::before {
    content: '+';
    position: absolute;
    right: 10px;
    top: 40%;

    width: 10px;
    height: 10px;

    font-size: 18px;
    color: ${color['brand-color']};
    line-height: 1;
    font-weight: 600;

    transform: translate(-50%, -50%);
    transition: all 0.2s linear;
  }

  &:hover::before {
    color: ${color['white-color']};
  }
`;

export const fileField = css`
  color: var(--primary-color);
  visibility: hidden;
`;
export const formNotice = css`
  color: ${color['brand-color']};
  transition: all 0.2s linear;
`;
