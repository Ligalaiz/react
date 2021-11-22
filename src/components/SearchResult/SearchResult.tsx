import { Articles } from '@components/Articles';
import { ISearchResult } from '@src/interfaces';
import React, { FC } from 'react';

export const SearchResult: FC<ISearchResult> = ({ items }) => {
  return (
    <>
      {!items
        ? null
        : items.map((article) => (
            <Articles article={article} key={article._id} />
          ))}
    </>
  );
};
