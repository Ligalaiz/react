export default function PageSize(props) {
  const { pageSize, setPageSize } = props;

  function handlerChange(e) {
    setPageSize(e.target.value);
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
          <option value="13">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>
    </div>
  );
}
