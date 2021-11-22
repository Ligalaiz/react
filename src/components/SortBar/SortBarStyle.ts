import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { IButton } from '@src/interfaces';
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

export const baseBtn = css`
  padding: 12px;
  border: 1px solid transparent;

  line-height: 1;

  transition: all 0.2s ease;
`;
export const directionLeft = css`
  border-right: none;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const directionCenter = css`
  border-left: none;
  border-right: none;
`;

export const directionRight = css`
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const activeBtn = css`
  background-color: #47ffa56b;
  border-color: #47ffa56b;
  box-shadow: 0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%);
`;

export const SortBtn = styled.button<IButton>`
  ${baseBtn}
  ${({ sortType }) => {
    if (sortType) {
      return activeBtn;
    }
    return '';
  }}

  ${({ direction }) => {
    let result: SerializedStyles | string = '';
    if (direction === 'left') {
      result = directionLeft;
    } else if (direction === 'center') {
      result = directionCenter;
    } else if (direction === 'right') {
      result = directionRight;
    }
    return result;
  }}
`;
