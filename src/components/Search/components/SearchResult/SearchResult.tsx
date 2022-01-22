import { Articles } from '@src/components/Search/components/Articles';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const SearchResult: FC = () => {
  const { news } = useTypedUseSelector((state) => state.news);
  const { search } = useLocation();

  return (
    <>
      {!news
        ? null
        : news.map((article) => (
            <Link
              to={{
                pathname: `/details/card/${article.id}`,
                search: `${search}`,
                state: { article, id: article.id, news },
              }}
              key={article._id}
            >
              <Articles article={article} />
            </Link>
          ))}
    </>
  );
};
