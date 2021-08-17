import PageSize from '../pageSize/PageSize';
import PageNumber from '../pageNumber/PageNumber';
import PageTotal from '../pageTotal/PageTotal';

export default function PageBar(props) {
  const { items } = props;

  return (
    <>
      <PageSize />
      <PageNumber items={items} />
      <PageTotal />
    </>
  );
}
