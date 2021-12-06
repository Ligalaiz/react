import { useSearchParams } from 'react-router-dom';
import { get, set } from '@root/utils';
import { useAction } from '@root/hooks/useAction';
import { useSelector } from 'react-redux';

const PageNumber = () => {
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
          data-testid="pageNumber"
          className="pageNumber"
          name="pageNumber"
          type="number"
          value={pageNumber}
          onChange={handlerChange}
        />
      </label>
    </div>
  );
};

export { PageNumber };
