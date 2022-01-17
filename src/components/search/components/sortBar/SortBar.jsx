import { get, set } from '@root/utils';
import React from 'react';
import { useAction } from '@root/hooks/useAction';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const SortBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortType } = useSelector((state) => state.news);
  const { setSortType } = useAction();

  const style = {
    backgroundColor: '#D43728',
    color: '#ffffff',
    borderColor: '47ffa56b',
    boxShadow: '0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%)',
  };

  function handleClick(e) {
    const sortValue = e.target.name;

    setSortType({ sortType: sortValue });

    const requestData = get('requestData');
    set('requestData', { ...requestData, sortType: sortValue });

    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams, sortType: sortValue });
  }

  return (
    <>
      <button
        className="sort__btn sort__btn--left"
        name="relevancy"
        style={sortType === 'relevancy' ? style : {}}
        data-testid="relevancy"
        type="button"
        onClick={handleClick}
      >
        relevancy
      </button>
      <button
        className="sort__btn sort__btn--center"
        name="date"
        style={sortType === 'date' ? style : {}}
        data-testid="date"
        type="button"
        onClick={handleClick}
      >
        date
      </button>
      <button
        className="sort__btn sort__btn--right"
        name="rank"
        style={sortType === 'rank' ? style : {}}
        data-testid="rank"
        type="button"
        onClick={handleClick}
      >
        rank
      </button>
    </>
  );
};

export { SortBar };
