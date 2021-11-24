import { useHistory, useLocation } from 'react-router-dom';
import { get, set, setQueryUtils } from '@/utils';

export default function PageSize(props) {
  const { pageSize, setPageSize } = props;
  const router = useHistory();
  const { search } = useLocation();

  function handlerChange(e) {
    const sizeValue = e.target.value;
    setPageSize(sizeValue);

    const requestData = get('requestData');
    set('requestData', { ...requestData, pageSize: sizeValue });
    setQueryUtils({ search, router, param: 'pageSize', paramValue: sizeValue });
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
