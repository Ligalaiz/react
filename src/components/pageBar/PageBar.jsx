import PageSize from '../pageSize/PageSize';
import PageTotal from '../pageTotal/PageTotal';

export default function PageBar(props) {
  const { pageSize, setPageSize, pageTotal } =
    props;

  return (
    <>
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      <PageTotal pageTotal={pageTotal} />
    </>
  );
}
