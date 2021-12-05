import { css } from '@emotion/react';
import { color } from '@src/styles';

export const header = css`
  min-height: 50px;
  background-color: ${color.primary};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 50px 0 0;
  box-shadow: 1px 1px 10px #777;
`;

export const nav = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: stretch;
  height: 100%;
`;

export const navLi = css`
  display: flex;
  align-items: center;
`;

export const navLink = css`
  color: ${color['white-color']};
  text-decoration: none;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 0 15px;
  transition: all 0.2s linear;
  &:hover,
  &.active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const navLinkAbout = css`
  ${navLink}
  position: relative;
  box-shadow: 0 13px 7px -15px rgb(50 50 93 / 25%),
    0 8px 16px -8px rgb(0 0 0 / 30%), 0 -6px 16px -6px rgb(0 0 0 / 3%);
  &:after {
    content: '';
    display: block;
    margin-left: 9px;
    width: 30px;
    height: 30px;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 35.96 33.31'%3E%3Cellipse cx='17.98' cy='31.55' fill='rgba(60,60,60,0.3)' rx='14.75' ry='.57'/%3E%3Cpath fill='%23fff' d='M34.94 15v-.93c-.23-3-2.16-5.93-5.22-6.3-2.31-.28-3.39 1.45-2.4 3.84a.43.43 0 000 .05v.11a.14.14 0 010 .06.63.63 0 000 .09v.17c0 .08.06.18.09.29s0 0 0 .05a1 1 0 000 .17.64.64 0 010 .07c0 .18.1.38.14.6a.24.24 0 010 .08v.29c0 .03.06.33.08.5.37 2.58 0 6.27-4.73 7.37A12.74 12.74 0 0019.7 23c-.17-.65-.36-1.25-.55-1.77a5.16 5.16 0 002.05-2.56 11.26 11.26 0 01-.69 2.33c1.81-1.55 2-5.05 2-5.54a4.72 4.72 0 01.21 2c1.55-2.41-1.17-6-1.17-6a9.67 9.67 0 011.84 2.24C23 11.75 20.82 10 20.82 10c2.65-4 2.51-5.68 2.51-5.68-3.26-1.34-7 .73-7 .73a5.12 5.12 0 00-4-1.7 3.61 3.61 0 011.56 1 16.79 16.79 0 00-3.23-.74C10.41 3 9.4 1.16 6.22 1h-.58S5 3.64 5.61 5.19c-1.15.49-1.26.93-1.26.93l1.17-.25-.67 2.67a4.66 4.66 0 00-2.39 1.38 3 3 0 011.15-.07A5.11 5.11 0 001 13.05a1.32 1.32 0 01.87-.51c-1.47 2.69.49 3.76.49 3.76a3.8 3.8 0 010-.92 8.52 8.52 0 002.19 3.9 14.13 14.13 0 01-.24-1.59 5.46 5.46 0 001.93 2.7 6.25 6.25 0 01-.4-1.52 5.87 5.87 0 001.36 1.75c-.12.24-.24.47-.34.71a12 12 0 00-.7 2.13c0 .23-.09.45-.13.66a1.4 1.4 0 00-1-.31 1.4 1.4 0 00-1.09 1 3.1 3.1 0 000 1.57 9.48 9.48 0 001.8 3.92A2.92 2.92 0 004 30.06c-.56.16-1 .83-.72 1.34H22.6c.29-.51-.16-1.18-.72-1.34a2.92 2.92 0 00-1.71.24A9.48 9.48 0 0022 26.44 3.24 3.24 0 0022 25a15.89 15.89 0 012.87-.21 14.93 14.93 0 004.65-.69c3.72-1.24 5.38-5.25 5.38-9zm-12.49.42h-.05v-.07z'/%3E%3C/svg%3E");
  }
`;

export const logoPicture = css`
  display: block;
  width: 200px;
  padding: 10px 20px 0 20px;

  @media (max-width: 1450px) {
    width: 70px;
    padding-top: 21px;
  }
`;
