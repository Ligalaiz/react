import { css } from '@emotion/react';
import { color } from '@src/styles';

export const loader = css`
  position: fixed;
  top: 250px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-gap: 2px;
  width: 100px;
  height: 100px;

  & > div {
    position: relative;
    width: 100%;
    height: 100%;
    background: ${color['green-color-dark']};
    transform: scale(0);
    transform-origin: center center;
    animation: loaderAnime 2s infinite linear;
    box-shadow: 0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%);

    &:nth-of-type(1),
    &:nth-of-type(5),
    &:nth-of-type(9) {
      animation-delay: 0.4s;
    }

    &:nth-of-type(4),
    &:nth-of-type(8) {
      animation-delay: 0.2s;
    }

    &:nth-of-type(2),
    &:nth-of-type(6) {
      animation-delay: 0.6s;
    }

    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
  }

  @keyframes loaderAnime {
    0% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
    80% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
