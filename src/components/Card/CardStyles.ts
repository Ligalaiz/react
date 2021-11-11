import { css } from '@emotion/react';
import { color } from '@src/styles';

export const apartmentItem = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 500px;

  @media only screen and (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export const optional = css`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 15px;

  line-height: 1.2;
  color: ${color['grey-color--dark']};
`;

export const apartmentImage = css`
  min-width: 300px;
  border-radius: 12px;
  border-radius: 12px;
  max-height: 230px;
  min-height: 230px;

  overflow: hidden;
  img {
    border-radius: 12px;
    height: 100%;
    width: 100%;

    object-fit: cover;
  }
`;

export const apartmentInfo = css`
  position: relative;

  max-width: 500px;
  min-width: 300px;
  padding: 15px 15px 40px;
`;

export const apartmentName = css`
  margin-bottom: 15px;

  color: ${color['grey-color--dark']};
  font-weight: 400;
`;

export const apartmentDescription = css`
  margin-bottom: 15px;
`;

export const apartmentSubDescription = css`
  position: absolute;
  bottom: 15px;

  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 470px;
`;

export const apartmentPrice = css`
  margin-left: auto;
  padding-right: 30px;

  color: ${color['grey-color--dark']};
  font-weight: 400;
`;

export const apartmentRating = css`
  position: relative;
  padding-left: 20px;

  font-weight: 600;

  &::before {
    content: '\2605';
    position: absolute;
    left: 0;
    top: 40%;

    font-size: 20px;
    line-height: 1;
    color: ${color['brand-color']};

    transform: translateY(-50%);
  }
`;

export const apartmentReviews = css`
  color: ${color['grey-color--dark']};
  font-weight: 400;
`;

export const apartmentNum = css`
  font-size: 18px;
  font-weight: 600;
  color: ${color['black-color']};
`;
