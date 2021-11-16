import { css } from '@emotion/react';
import { color } from '@src/styles';

export const formBtnStyle = css`
  border: 1px solid ${color['brand-color']};
  min-height: 47px;

  font-size: 14px;

  transition: all 0.2s linear;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;
