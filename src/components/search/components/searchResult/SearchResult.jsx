import { Link, useLocation } from 'react-router-dom';
import Articles from '../articles/Arcicles';

export default function SearchResult(props) {
  const { items } = props;
  const { search } = useLocation();

  if (!items) return false;

  return (
    <>
      {items.map((article, index) => (
        <Link
          to={{
            pathname: `/details/card/${article.id}`,
            search: `${search}`,
            state: { article: article, id: article.id, items: items },
          }}
          key={index}
        >
          <Articles article={article} />
        </Link>
      ))}
    </>
  );
}
