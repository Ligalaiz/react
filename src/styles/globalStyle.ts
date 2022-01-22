import { css } from '@emotion/react';
import { color } from './variables';
import font from '@assets/fonts/roboto-regular.woff';

export const globalStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${font});
  }

  html {
    box-sizing: border-box;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  * {
    box-sizing: inherit;
    outline: none;
  }

  ::before {
    box-sizing: inherit;
    outline: none;
  }

  ::after {
    box-sizing: inherit;
    outline: none;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  :root {
    font-size: 10px;
  }

  .wrapper {
    min-width: 320px;
    width: 100vw;
    height: 100vh;
  }

  .container {
    width: 100%;
    max-width: 1278px;
    margin: 0 auto;
    padding: 0 15px;
  }

  input:focus {
    outline: none;
  }

  body {
    position: relative;

    margin: 0;
    padding: 0;

    font-family: 'Roboto', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${color['black-color']};

    background-color: ${color['white-color']};

    user-select: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(0 0 0 0);
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .reset-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .wrapper {
    min-width: 320px;
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 50px;
  }

  .container {
    width: 100%;
    max-width: 1278px;
    margin: 0 auto;
    padding: 0 15px;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${color['grey-color']};
    background-clip: padding-box;
    border-radius: 5px;
  }

  .page {
    position: absolute;
  }

  .page-enter-active {
    animation: fade-in 1s forwards;
  }

  .page-exit-active {
    animation: fade-out 1s forwards;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  /* Search component */

  .control {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    padding-right: 20px;
  }

  .message {
    &__wrap {
      position: relative;
      top: 250px;
      left: 50%;
      max-width: 800px;
      transform: translate(-50%, -50%);
      background-color: ${color['primary-dark']};
      border-radius: 20px;
      padding: 10px;
      text-align: center;
      color: ${color['white-color']};
      font-size: 18px;
      font-weight: 600;
      box-shadow: 0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%);
    }

    &__btn {
      border: none;
      padding: 7px;
      margin: 10px;
      border-radius: 7px;
      font-size: 16px;
      box-shadow: 0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%);
    }
  }

  @media (max-width: 800px) {
    .control {
      align-items: center;
      flex-direction: column;
      gap: 9px;
    }
  }

  /* animation */
  figure {
    display: block;
    margin: 0;
  }

  figure {
    margin: 0;
    padding: 0;
  }

  figure:after,
  figure:before {
    content: ' ';
    display: table;
    clear: both;
  }

  .bio-image,
  .bio-image *,
  .bio-image :after,
  .bio-image :before {
    box-sizing: border-box;
  }

  .rounded-lg {
    border-radius: 0.694rem;
    margin-bottom: 0.75rem;
    margin: 0 auto;
    width: 230px;
    height: 230px;
  }

  .bio-image {
    --bio-image-border-width: 5px;
  }

  .bio-image {
    padding: 0;
    margin: 0;
    display: block;
    width: auto;
    height: auto;
    border-radius: inherit;
    position: relative;
  }

  .bio-image::before {
    display: block;
    content: '';
    height: 90%;
    width: 160%;
    position: absolute;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAAASCAYAAABim40OAAACuElEQVRogc1XUZJjIQjEzN7/yMl8ucP0dkNjXrKh6pWAqERaICveR+vD96vo8cazOvoYX54NwOl6Z52ycc907E4C4a45DfKrwHH5vpPgd7aTYKNOyUvYKL7zRZG6WNRP5cne7pxrMwHLEbCqS3aDMglwpcvjMmTGVz4wejQ86lDfjZ0OeSY/az/VMaJ2XQZA/QQQChSKV99N8OpjvuHvUsGt+ErX2bI9q7Hy0dE580pnZ0R1uTi/eSVX2SLrbmKeAeQG34qIL2KDozo/kwosBv4Ouk5WOheMyrfK5t1Z8K++Ak9XVjK/ZRW8LnMgYDZQtpx5lBFoERxI//z40EFmQLgn2R27PZkP0fDVGmaj5thdoE7JEREPBR6nFJ1+CCAFgq9mVF91dhUcBRgGHMWjju0TZN7xi+nVGmaH8wG2IeaUHH+ibyqRTuxZCVGyAhgrZQi0KrtlYgHYAV1JXvET8IjfF7jnb4mPpMtg2TZbr0rpSnwQO9SzjLAauxV83Zj2j1FU9QtX0fQMfD1VM6zWn9D00agz3fOr866OwRF1mUe9EmaDL8d9HflF5jS/M8Yd1rHzsWzt87HMdr0D+sB6HixPXV/EyqH6QvCqBOE9qPXMTsmMqI3TMG9eNc7P9EJYYvK/KdUsZz0raZF06Hu+DCxBD+BZv1L1RKeAcXsZpnNtgtiEmEOeyRHx0zBvchtnHBWAUFa66q86ggltuj5HZU73pVdAcMHhAEX5xHys/Ge/j43IO/IvfZdxmM4FVDdOs1X1Twr3YWciTYPjZopXZILOxgWElVGIjs5V/Yw752QrxU/A1fGdL4yciz551U45qILa+fbsOmeutekud2I7BeJJhmPr3L07KlN0Y/eMzpmb2JzYntgfXfIr9nLWXgl0RuPLO1xzxdqPOPNK8FxJn+rXhP4HON5K31PHDhmjlm6fAAAAAElFTkSuQmCC');
    background-size: 100% auto;
    background-repeat: no-repeat;
    top: 94%;
    left: -30%;
    right: 0;
    transform-origin: 30% 50%;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .bio-image:hover::before {
    opacity: 0;
  }

  .bio-image--white {
    --bio-image-border-color: ${color['white-color']};
  }

  .bio-image-wrapper {
    background: var(
      --bio-image-background-color,
      var(--bio-image-border-color, ${color.primary})
    );
    border: 8px solid ${color.primary};
    border-radius: inherit;
    transform: scale(0.84) translateX(15%) rotateZ(calc(-1 * (11 * 1deg)));
    transform-origin: 0 100%;
    transition: transform 0.2s ease-out;
    overflow: hidden;
    width: auto;
    height: auto;
  }

  .bio-image-image {
    -o-object-fit: cover;
    object-fit: cover;
    display: block;
    transform: scale(1.2) rotateZ(calc(11 * 1deg));
    transition: transform 0.2s ease-out;
    width: 230px;
    height: 230px;
    object-fit: fill;
  }

  .bio-image:hover .bio-image-wrapper {
    transform: scale(0.84) translateX(15%) rotateZ(0);
  }

  .bio-image:hover .bio-image-image {
    transform: scale(1.2) rotateZ(0);
  }
`;
