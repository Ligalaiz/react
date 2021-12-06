import { useSelector } from 'react-redux';

const PageTotal = () => {
  const { pageTotal } = useSelector((state) => state.news);

  return (
    <div className="pageTotal">
      <p>{pageTotal}</p>
    </div>
  );
};
export { PageTotal };
