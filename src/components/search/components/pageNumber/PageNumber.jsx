import { useSearchParams } from 'react-router-dom';
import { get, set } from '@/utils';
import { useAction } from '@/hooks/useAction';
import { useSelector } from 'react-redux';

export default function PageSize() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageNumber } = useSelector((state) => state.news);
  const { setNewsPage } = useAction();

  function handlerChange(e) {
    let currentNumber;
    if (e.target.value < 0) {
      currentNumber = 1;
    } else {
      currentNumber = e.target.value;
    }

    setNewsPage(currentNumber);

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
