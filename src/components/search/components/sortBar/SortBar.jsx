import { get, set, setQueryUtils } from '@/utils';
import { useHistory, useLocation } from 'react-router-dom';

export default function SortBar(props) {
  const { sortType, setSortTipe } = props;
  const router = useHistory();
  const { search } = useLocation();

  const style = {
    backgroundColor: '#D43728',
    color: '#ffffff',
    borderColor: '47ffa56b',
    boxShadow: '0 7px 15px rgb(0 0 0 / 25%), 0 4px 6px rgb(0 0 0 / 22%)',
  };

  function handleClick(e) {
    const sortValue = e.target.name;
    setSortTipe(sortValue);

    const requestData = get('requestData');
    set('requestData', { ...requestData, sortType: sortValue });

    setQueryUtils({ search, router, param: 'sortType', paramValue: sortValue });
  }

  return (
    <>
      <button
        className="sort__btn sort__btn--left"
        name="relevancy"
        style={sortType === 'relevancy' ? style : {}}
        type="button"
        onClick={handleClick}
      >
        relevancy
      </button>
      <button
        className="sort__btn sort__btn--cener"
        name="popularity"
        style={sortType === 'popularity' ? style : {}}
        type="button"
        onClick={handleClick}
      >
        popularity
      </button>
      <button
        className="sort__btn sort__btn--right"
        name="publishedAt"
        style={sortType === 'publishedAt' ? style : {}}
        type="button"
        onClick={handleClick}
      >
        published at
      </button>
    </>
  );
}
