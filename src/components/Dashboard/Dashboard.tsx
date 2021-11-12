/** @jsxImportSource @emotion/react */
import { ApartmentTable } from '@components/ApartmentTable';
import { SearchBar } from '@components/SearchBar';
import { IApartment } from '@src/interfaces';
import React, { FC, useState } from 'react';

export const Dashboard: FC<{ apartments: IApartment[] }> = ({ apartments }) => {
  const [filterText, setFilterText] = useState<string>('');
  const [petsAllowed, setPetsAllowed] = useState<boolean>(false);

  const handleSearchValue = (value: string): void => {
    setFilterText(value);
  };

  const handleCheckboxValue = (value: boolean): void => {
    setPetsAllowed(value);
  };

  return (
    <div className="wrap">
      <SearchBar
        filterText={filterText}
        petsAllowed={petsAllowed}
        onSearchValue={handleSearchValue}
        onCheckboxValue={handleCheckboxValue}
      />
      <ApartmentTable
        apartments={apartments}
        filterText={filterText}
        petsAllowed={petsAllowed}
      />
    </div>
  );
};
