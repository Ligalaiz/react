import PageSize from '../pageSize/PageSize';
import PageNumber from '../pageNumber/PageNumber';
import PageTotal from '../pageTotal/PageTotal';

export default function PageBar() {
  return (
    <>
      <PageSize />
      <PageNumber />
      <PageTotal />
    </>
  );
}
