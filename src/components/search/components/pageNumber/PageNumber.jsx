export default function PageSize(props) {
  const { pageNumber, setPageNumber, pageTotal } = props;

  function handlerChange(e) {
    let currentNumber;
    if (e.target.value < 0) {
      currentNumber = 1;
    } else if (e.target.value > pageTotal) {
      return;
    } else {
      currentNumber = e.target.value;
    }
    setPageNumber(currentNumber);
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
