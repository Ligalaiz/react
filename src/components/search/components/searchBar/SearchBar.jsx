import { set, get, setQueryUtils } from '@root/utils';
import getSearchDataUtils from '@root/utils/getSearchData.utils';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchRequestAction } from '@root/store/searchRequestReducer';

export default function SearchBar() {
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const pageSize = useSelector((state) => state.pageSize.pageSize);
  const sortType = useSelector((state) => state.sortType.sortType);
  const pageTotal = useSelector((state) => state.pageTotal.pageTotal);
  const searchRequest = useSelector(
    (state) => state.searchRequest.searchRequest,
  );

  const router = useHistory();
  const { search } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchRequest.length > 2) {
      const requestData = get('requestData');

      set('requestData', { ...requestData, searchRequest });

      getSearchDataUtils(
        { pageSize, pageNumber, sortType, pageTotal, searchRequest },
        dispatch,
      );

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
    dispatch(searchRequestAction(requestValue));
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
}
