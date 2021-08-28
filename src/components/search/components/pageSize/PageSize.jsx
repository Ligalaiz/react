import { set, get, setQueryUtils } from '@root/utils';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pageSizeAction } from '@root/store/pageSizeReducer';

export default function PageSize() {
  const router = useHistory();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const pageSize = useSelector((state) => state.pageSize.pageSize);

  function handlerChange(e) {
    const sizeValue = e.target.value;
    dispatch(pageSizeAction(sizeValue));

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
