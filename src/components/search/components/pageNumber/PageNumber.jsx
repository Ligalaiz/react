import { useSearchParams } from 'react-router-dom';
import { get, set } from '@/utils';

export default function PageSize(props) {
  const { pageNumber, setPageNumber } = props;
  const [searchParams, setSearchParams] = useSearchParams();

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

    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams, pageNumber: currentNumber });
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
