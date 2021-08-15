export default function PageTotal(props) {
  const { pageTotal } = props;

  return (
    <div className="pageTotal">
      <p>{pageTotal}</p>
    </div>
  );
}
