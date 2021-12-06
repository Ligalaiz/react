import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Articles } from '../articles/Arcicles';

const SearchResult = () => {
  const { news } = useSelector((state) => state.news);
  const { search } = useLocation();

  if (!news) return false;

  return (
    <>
      {news.map((article, index) => (
        <Link
          to={{
            pathname: `/details/card/${article.id}`,
            search: `${search}`,
            state: { article: article, id: article.id, items: news },
          }}
          key={index}
        >
          <Articles article={article} />
        </Link>
      ))}
    </>
  );
};

export { SearchResult };
