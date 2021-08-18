import { get, set, setQueryUtils } from '@/utils';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pageNumberAction } from '@/store/pageNumberReducer';

export default function PageNumber() {
  const router = useHistory();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);

  function handlerChange(e) {
    let currentNumber;
    if (e.target.value < 0) {
      currentNumber = 1;
    } else {
      currentNumber = e.target.value;
    }
    dispatch(pageNumberAction(currentNumber));

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
