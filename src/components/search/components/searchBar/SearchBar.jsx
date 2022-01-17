import { useAction } from '@root/hooks/useAction';
import { get, getUrlUtils, set } from '@root/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchRequest, pageNumber, pageSize, sortType } = useSelector(
    (state) => state.news,
  );
  const { setSearchRequest, newsRequest } = useAction();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      const requestData = get('requestData');

      set('requestData', { ...requestData, searchRequest });

      newsRequest(
        getUrlUtils({ searchRequest, pageNumber, pageSize, sortType }),
      );
      const latestPrams = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...latestPrams, searchRequest: searchRequest });
    }
  };

  const handleSearchChange = (e) => {
    const requestValue = e.target.value;

    setSearchRequest({ searchRequest: requestValue });
  };

  return (
    <>
      <div className="search__wrap">
        <div className="container">
          <form className="search__form" onSubmit={handleSubmit}>
            <div className="search__container">
              <input
                className="search__field"
                placeholder="Start your search"
                value={searchRequest}
                onChange={handleSearchChange}
              />
              <button
                data-testid="search__btn"
                type="submit"
                className="search__btn"
                disabled={searchRequest < 3}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { SearchBar };
