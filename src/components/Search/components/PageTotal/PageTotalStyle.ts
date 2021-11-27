import { css } from '@emotion/react';
import { color } from '@src/styles';

export const pageTotalStyle = css`
  display: flex;
  min-width: 50px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  background-color: ${color['white-color']};
`;
