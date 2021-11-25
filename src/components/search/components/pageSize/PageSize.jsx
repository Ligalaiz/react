import { useSearchParams } from 'react-router-dom';
import { get, set } from '@/utils';

export default function PageSize(props) {
  const { pageSize, setPageSize } = props;
  const [searchParams, setSearchParams] = useSearchParams();

  function handlerChange(e) {
    const sizeValue = e.target.value;
    setPageSize(sizeValue);

    const requestData = get('requestData');
    set('requestData', { ...requestData, pageSize: sizeValue });

    const latestPrams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...latestPrams, pageSize: sizeValue });
  }

  return (
    <div className="pageSize__wrap">
      <label>
        <select
          className="pageSize"
          name="pageSize"
          value={pageSize}
          onChange={handlerChange}
        >
          <option value="1">1</option>
          <option value="10">10</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </div>
  );
}
