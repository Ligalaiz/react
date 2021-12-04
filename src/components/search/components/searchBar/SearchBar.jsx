import { useSearchParams } from 'react-router-dom';
import { get, set, getUrlUtils } from '@/utils';
import { useSelector } from 'react-redux';
import { useAction } from '@/hooks/useAction';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchRequest, pageNumber, pageSize, sortType } = useSelector(
    (state) => state.news,
  );
  const { fetchNews, setSearchRequest } = useAction();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      const requestData = get('requestData');

      set('requestData', { ...requestData, searchRequest });

      fetchNews(getUrlUtils({ searchRequest, pageNumber, pageSize, sortType }));
      const latestPrams = Object.fromEntries(searchParams.entries());
      setSearchParams({ ...latestPrams, searchRequest: searchRequest });
    }
  };

  const handleSearchChange = (e) => {
    const requestValue = e.target.value;

    setSearchRequest(requestValue);
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
}
