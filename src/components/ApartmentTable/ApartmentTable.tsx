import { Card } from '@components/Card';
import { IApartment, IApartmentTable } from '@src/interfaces';
import React, { FC, ReactElement } from 'react';
import * as cl from './ApartmentTableStyles';

export const ApartmentTable: FC<IApartmentTable> = ({
  apartments,
  petsAllowed,
  filterText,
}) => {
  const filterTextLOwer = filterText.toLowerCase();
  const result: ReactElement[] = [];

  apartments.forEach((apartment: IApartment): void => {
    const apartmentName = apartment.name.toLowerCase();
    if (petsAllowed && !apartment.pets) {
      return;
    }

    if (apartmentName.indexOf(filterTextLOwer) === -1) {
      return;
    }
    result.push(<Card apartment={apartment} key={apartment.name} />);
  });

  return (
    <div className="apartment__wrap" css={cl.apartmentWrap}>
      <div className="container  apartment__grid" css={cl.apartmentGrid}>
        {result}
      </div>
    </div>
  );
};
