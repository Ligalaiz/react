import { IApartment, ICard } from '@src/interfaces';
import React, { FC, ReactElement } from 'react';

export const Optional: FC<ICard> = ({ apartment }) => {
  const result: ReactElement[] = [];
  const optionals = [
    'guests',
    'bedroom',
    'bed',
    'bath',
    'wifi',
    'condition',
    'kitchen',
    'heating',
  ];

  const keys = Object.keys(apartment);

  for (const key of keys) {
    if (optionals.indexOf(key) !== -1 && apartment[key as keyof IApartment]) {
      result.push(
        <li className="optional__item" key={key}>
          {apartment[key as keyof IApartment]} {key}
          {key === optionals[optionals.length - 1] ? '' : ' · '}
        </li>,
      );
    }
  }

  return <>{result}</>;
};
