import { useAction } from '@root/hooks/useAction';
import { get, set } from '@root/utils';
import React from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const PageSize = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pageSize } = useSelector((state) => state.news);
  const { setPageSize } = useAction();

  function handlerChange(e) {
    const sizeValue = e.target.value;

    setPageSize({ pageSize: sizeValue });

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
};

export { PageSize };
