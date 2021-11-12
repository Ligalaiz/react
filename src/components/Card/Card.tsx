/** @jsxImportSource @emotion/react */
import { Optional } from '@components/Optional';
import { ICard } from '@src/interfaces';
import React, { FC } from 'react';
import * as cl from './CardStyles';

export const Card: FC<ICard> = ({ apartment }) => {
  return (
    <div className="apartment__item" css={cl.apartmentItem}>
      <div className="apartment__image" css={cl.apartmentImage}>
        <img src={apartment.image} alt={apartment.name} />
      </div>
      <div className="apartment__info" css={cl.apartmentInfo}>
        <p className="apartment__name" css={cl.apartmentName}>
          {apartment.name}
        </p>
        <p className="apartment__description" css={cl.apartmentDescription}>
          {apartment.description}
        </p>
        <ul
          className="apartment__optional optional reset-list"
          css={cl.optional}
        >
          <Optional apartment={apartment} />
        </ul>
        <div
          className="apartment__subDescription"
          css={cl.apartmentSubDescription}
        >
          {apartment.rating ? (
            <div className="apartment__rating" css={cl.apartmentRating}>
              {apartment.rating}
              <span className="apartment__reviews" css={cl.apartmentReviews}>
                {' '}
                ({apartment.reviews} reviews)
              </span>
            </div>
          ) : (
            ''
          )}
          <div className="apartment__price" css={cl.apartmentPrice}>
            <span className="apartment__num" css={cl.apartmentNum}>
              {apartment.price}$
            </span>{' '}
            / month
          </div>
        </div>
      </div>
    </div>
  );
};
