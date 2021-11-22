import { css } from '@emotion/react';
import { color } from './variables';

export const globalStyle = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/roboto-regular.woff');
  }

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  ::before {
    box-sizing: inherit;
  }

  ::after {
    box-sizing: inherit;
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
    overflow-x: hidden;
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
    overflow-x: hidden;

    margin: 0;

    font-family: 'Open Sans', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${color['black-color']};

    background-color: ${color['white-color']};

    user-select: none;
    overflow-y: scroll;
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

  .control {
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
  }

  .message {
    &__wrap {
      position: relative;
      top: 250px;
      left: 50%;
      max-width: 800px;
      transform: translate(-50%, -50%);
      background-color: #ff00005e;
      border-radius: 20px;
      padding: 10px;
      text-align: center;
      color: $white-color;
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
`;
