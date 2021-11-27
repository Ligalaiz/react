import { Articles } from '@src/components/Search/components/Articles';
import { ISearchResult } from '@src/interfaces';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SearchResult: FC<ISearchResult> = ({ items }) => {
  const { search } = useLocation();

  return (
    <>
      {!items
        ? null
        : items.map((article) => (
            <Link
              to={{
                pathname: `/details/card/${article.id}`,
                search: `${search}`,
                state: { article, id: article.id, items },
              }}
              key={article._id}
            >
              <Articles article={article} />
            </Link>
          ))}
    </>
  );
};
