import Articles from '../articles/Arcicles';

export default function SearchResult(props) {
  const { items } = props;

  if (!items) return false;
  return (
    <>
      {items.map((article, index) => (
        <Articles article={article} key={index} />
      ))}
    </>
  );
}
