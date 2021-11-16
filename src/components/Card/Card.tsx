/** @jsxImportSource @emotion/react */
import { ICard, ICardApp } from '@src/interfaces';
import React, { FC } from 'react';
import { cardList } from './CardStyle';

export const Card: FC<ICard> = ({ card, index }) => {
  const fields = [
    'birthday',
    'experience',
    'fileCV',
    'name',
    'surname',
    'phone',
    'letter',
    'task',
    'portfolio',
  ];

  const filtredCardFields = [...Object.keys(card)].filter((item) => {
    return (
      fields.findIndex((i) => i === item) !== -1 && card[item as keyof ICardApp]
    );
  });

  return (
    <div data-testid="card">
      <p>#{index + 1}</p>
      <ul className="reset-list card__list" css={cardList}>
        {filtredCardFields.map((item) => {
          let result;

          if (
            item === 'fileCV' ||
            item === 'letter' ||
            item === 'task' ||
            item === 'portfolio'
          ) {
            result = card[item]?.[0]?.file?.name;
          } else {
            result = card[item as keyof ICardApp];
          }
          return (
            <li key={item} className="card__item">
              {item}: {result}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
