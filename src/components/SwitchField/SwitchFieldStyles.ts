import { css } from '@emotion/react';
import { color } from '@src/styles';

export const switchStyle = css`
  position: absolute;
  right: 2rem;
  top: 2rem;

  display: inline-block;
  width: 60px;
  height: 34px;
  margin-bottom: 10px;
  border-radius: 34px;

  box-shadow: 0 14px 28px ${color['black-color--lightX0']} 0,
    0 10px 10px ${color['black-color--lightX1']};
  & input {
    width: 0;
    height: 0;

    opacity: 0;
  }
`;

export const sliderStyle = css`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border: 2px solid ${color['white-color']};

  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    bottom: 2px;
    left: 4px;

    height: 26px;
    width: 26px;

    background-color: ${color['black-color']};
    -webkit-transition: 0.4s;
    transition: 0.4s;
    opacity: 0.7;
  }
  &.round {
    border-radius: 34px;
  }
  &.round:before {
    border-radius: 50%;
  }
`;

export const modeStyle = css`
  &:checked + .slider:before {
    background-color: ${color['white-color']};
    opacity: 0.7;
  }
  &:focus + .slider {
    box-shadow: 0 0 1px ${color['white-color']};
  }
  &:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
  }
`;
