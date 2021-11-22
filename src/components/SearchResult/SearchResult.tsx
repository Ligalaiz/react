import React, { FC } from 'react';
import { ISearchResult } from '@src/interfaces';
import { Articles } from '@components/Articles';

export const SearchResult: FC<ISearchResult> = ({ items }) => {
  return (
    <>
      {!items
        ? null
        : items.map((article, index) => (
            <Articles article={article} key={index} />
          ))}
    </>
  );
};
