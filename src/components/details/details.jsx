import { useParams, Link, useHistory, useLocation } from 'react-router-dom';
import getDetailsDataUtils from '@/utils/getDetailsData.utils';
import defaultImg from '@/assets/img/js.gif';
import { useEffect, useState } from 'react';
import { get } from '@/utils';
import './details.scss';

const Details = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const router = useHistory();
  const { search } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    getDetailsDataUtils({
      setItems,
      search,
      setError,
    });
  }, []);

  const localItems = get('items');
  if (!localItems || localItems.length === 0 || !items) return false;

  const index = localItems.findIndex((item) => item.id === id);
  if (index === -1) {
    router.push('/error');
    return null;
  }

  const article = localItems[index];
  const nextArticle = localItems[(index + 1) % localItems.length];
  const { author, content, description, publishedAt, title, url, urlToImage } =
    article;
  const date = new Date(publishedAt);
  const month = date.getMonth();
  const day = date.getDay();
  const currentDate = `${date.getFullYear()}-${
    month < 10 ? `0${month}` : month
  }-${day < 10 ? `0${day}` : day}`;

  return (
    <>
      <div className="article__wrap">
        <div className="article">
          <div className="article__image imgage__wrap">
            <img
              width="300"
              src={urlToImage || defaultImg}
              alt={title}
              onError={(e) => {
                e.target.onerror = null;
              }}
            />
          </div>
          <div className="article__description">
            <h2 className="article__title">{title}</h2>
            <p className="short-description">{description}</p>
            <p className="article__content">{content}</p>
            <p>Published at {currentDate}</p>
            <p>Author: {author}</p>
            <a className="article__content" href={url}>
              More information here
            </a>
          </div>
          <div>
            <Link
              className="details__link"
              to={{
                pathname: '/',
                search: `${search}`,
              }}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              className="details__link"
              to={{
                pathname: `/details/card/${nextArticle.id}`,
                search: `${search}`,
              }}
            >
              Next Article
            </Link>
          </div>
        </div>
      </div>
      {error && (
        <div className="message__wrap">
          <div className="message">
            <p>{error.message}</p>
            <button
              className="message__btn"
              type="button"
              onClick={() => setError(null)}
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
