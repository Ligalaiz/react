import { css } from '@emotion/react';
import { color } from '@src/styles';

export const searchBtn = css`
  position: absolute;
  right: 5px;
  top: 50%;

  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;

  transform: translateY(-50%);
  outline: none;
  cursor: pointer;
  background-color: ${color['green-color-light']};
  background-image: url("data:image/svg+xml,%3Csvg viewBox='-25 -25 80 80' xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='presentation' focusable='false' style='display: block; fill: none; height: 12px; width: 12px; stroke: white; stroke-width: 5.33333; overflow: visible;'%3E%3Cg fill='none'%3E%3Cpath d='m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
`;

export const searchField = css`
  border: 1px solid transparent;
  border-radius: 40px;
  padding: 10px 24px;

  text-align: left;

  transition: box-shadow 0.2s ease;
  box-shadow: 0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%);
`;

export const searchContainer = css`
  position: relative;
  top: 5px;

  display: inline-block;
  margin-bottom: 10px;

  overflow: visible;
`;
