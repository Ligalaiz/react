import { get, set, setQueryUtils } from '@/utils';
import { useHistory, useLocation } from 'react-router-dom';

export default function PageSize(props) {
  const { pageNumber, setPageNumber } = props;
  const router = useHistory();
  const { search } = useLocation();

  function handlerChange(e) {
    let currentNumber;
    if (e.target.value < 0) {
      currentNumber = 1;
    } else {
      currentNumber = e.target.value;
    }
    setPageNumber(currentNumber);

    const requestData = get('requestData');
    set('requestData', { ...requestData, pageNumber: currentNumber });

    setQueryUtils({
      search,
      router,
      param: 'pageNumber',
      paramValue: currentNumber,
    });
  }

  return (
    <div className="pageNumber__wrap">
      <label>
        <input
          className="pageNumber"
          name="pageNumber"
          type="number"
          value={pageNumber}
          onChange={handlerChange}
        />
      </label>
    </div>
  );
}
