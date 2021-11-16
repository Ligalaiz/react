import { css } from '@emotion/react';
import { color } from '@src/styles';

export const cardList = css`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  border: 1px solid var(--primary-color);
  margin-bottom: 30px;

  color: var(--primary-color);

  box-shadow: 0 14px 28px ${color['black-color--lightX0']},
    0 10px 10px ${color['black-color--lightX1']};
  overflow-x: hidden;
`;
