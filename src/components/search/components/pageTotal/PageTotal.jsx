import { useSelector } from 'react-redux';

export default function PageTotal() {
  const { pageTotal } = useSelector(state => state.news);

  return (
    <div className="pageTotal">
      <p>{pageTotal}</p>
    </div>
  );
}
