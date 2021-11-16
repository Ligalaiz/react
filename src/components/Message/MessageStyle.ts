import { css } from '@emotion/react';

export const message = css`
  position: absolute;
  top: 100px;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  border-radius: 15px;

  color: var(--primary-color);

  background-color: var(--message-bg-color);
  transform: translate(-50%, -50%);
`;

export const messageTitle = css`
  font-size: 20px;
`;
