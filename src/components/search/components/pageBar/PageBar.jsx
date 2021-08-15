import PageSize from '../pageSize/PageSize';
import PageNumber from '../pageNumber/PageNumber';
import PageTotal from '../pageTotal/PageTotal';

export default function PageBar(props) {
  const { pageSize, setPageSize, pageNumber, setPageNumber, pageTotal, items } =
    props;

  return (
    <>
      <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      <PageNumber
        items={items}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <PageTotal pageTotal={pageTotal} />
    </>
  );
}
