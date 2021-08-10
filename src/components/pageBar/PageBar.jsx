import PageTotal from '../pageTotal/PageTotal';

export default function PageBar(props) {
  const { pageTotal } =
    props;

  return (
    <>
      <PageTotal pageTotal={pageTotal} />
    </>
  );
}
