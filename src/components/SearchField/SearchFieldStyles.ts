import { css } from '@emotion/react';
import { color } from '@src/styles';
import styled from '@emotion/styled';

const baseBtnStyle = css`
  border: 1px solid ${color['grey-color--light']};
  border-radius: 40px;
  padding: 10px 24px;

  text-align: left;

  transition: box-shadow 0.2s ease;
  box-shadow: 0px 1px 2px ${color['black-color--light']},
    ${color['black-color--lightX1']};
  &:hover {
    box-shadow: 0px 2px 4px ${color['black-color--lightX0']};
  }
`;

export const SearchFieldStyled = styled.input`
  ${baseBtnStyle}
`;
