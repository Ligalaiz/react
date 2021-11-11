import React, { FC, ReactElement } from 'react';
import * as cl from './ApartmentTableStyles';
import { Card } from '@components/Card';
import { IApartmentTable, IApartment } from '@src/interfaces';

export const ApartmentTable: FC<IApartmentTable> = ({
  apartments,
  petsAllowed,
  filterText,
}) => {
  const filterTextLOwer = filterText.toLowerCase();
  const result: ReactElement[] = [];

  apartments.forEach(
    (apartment: IApartment, _index: number, _array: object[]): void => {
      const apartmentName = apartment.name.toLowerCase();
      if (petsAllowed && !apartment.pets) {
        return;
      }

      if (apartmentName.indexOf(filterTextLOwer) === -1) {
        return;
      }
      result.push(<Card apartment={apartment} key={apartment.name} />);
    },
  );

  return (
    <div className="apartment__wrap" css={cl.apartmentWrap}>
      <div className="container  apartment__grid" css={cl.apartmentGrid}>
        {result}
      </div>
    </div>
  );
};
