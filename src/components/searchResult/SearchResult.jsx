export default function SearchResult(props) {
  const { items } = props;

  if (!items) return false;
  return (
    <>
      {items.map((article, index) => (
        <li article={article} key={index}></li>
      ))}
    </>
  );
}
