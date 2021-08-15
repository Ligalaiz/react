import { set, get, setQueryUtils } from '@/utils';
import getSearchDataUtils from '@/utils/getSearchData.utils';
import { useHistory, useLocation } from 'react-router-dom';

export default function SearchBar(props) {
  const { setSearchRequest, searchRequest } = props;
  const router = useHistory();
  const { search } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchRequest.length > 2) {
      const requestData = get('requestData');

      set('requestData', { ...requestData, searchRequest });
      getSearchDataUtils(props);
      setQueryUtils({
        search,
        router,
        requestData,
        param: 'searchRequest',
        paramValue: searchRequest,
      });
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
