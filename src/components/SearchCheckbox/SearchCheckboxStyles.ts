import { css } from '@emotion/react';
import { color } from '@src/styles';
import styled from '@emotion/styled';

export const baseCheckboxStyle = css`
  position: absolute;
  z-index: -1;
  opacity: 0;

  &:checked + label {
    &::before {
      border-color: ${color['brand-color']};

      background-color: ${color['brand-color']};
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
  }
  &:not(:disabled) {
    &:not(:checked) + label {
      &:hover {
        &::before {
          border-color: ${color['grey-color--light']};
        }
      }
    }
    &:active + label {
      &::before {
        border-color: ${color['grey-color--light']};

        background-color: ${color['black-color--light']};
      }
    }
  }
  &:focus + label {
    &::before {
      box-shadow: 0 0 0 0.2rem ${color['brand-color-light']};
    }
  }
  &:focus {
    &:not(:checked) + label {
      &::before {
        border-color: ${color['black-color--light']};
      }
    }
  }
  &:disabled + label {
    &::before {
      background-color: ${color['black-color--light']};
    }
  }
`;

export const searchLabel = css`
  display: inline-flex;
  align-items: center;

  user-select: none;

  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid ${color['grey-color']};
    border-radius: 0.25em;
    margin-right: 0.5em;

    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
    cursor: pointer;
  }
`;

export const SearchCheckboxStyled = styled.input`
  ${baseCheckboxStyle}
`;
