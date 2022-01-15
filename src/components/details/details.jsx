import React, { useEffect } from 'react';
import defaultImg from '@root/assets/img/noimage.jpg';
import { useAction } from '@root/hooks/useAction';
import { get, getQueryUtils, getUrlUtils } from '@root/utils';
import { useSelector } from 'react-redux';
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import './details.scss';

const Details = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { news, error } = useSelector((state) => state.news);
  const { fetchNews, setError } = useAction();

  useEffect(() => {
    fetchNews(getUrlUtils(getQueryUtils(search, undefined, searchParams)));
  }, []);

  const localItems = get('items');
  if (!localItems || localItems.length === 0 || !news) return null;

  const index = localItems.findIndex((item) => item.id === id);
  if (index === -1) {
    navigate('/error');
    return null;
  }

  const article = localItems[index];
  const nextArticle = localItems[(index + 1) % localItems.length];
  const {
    title,
    author = '',
    published_date: publishedDate,
    summary,
    media,
    link,
  } = article;

  const errrorHandler = ({ currentTarget }) => {
    currentTarget.src = defaultImg;
  };

  return (
    <>
      <div className="article__wrap">
        <div className="article">
          <div className="article__image imgage__wrap">
            <img width="300" src={media} alt={title} onError={errrorHandler} />
          </div>
          <div className="article__description">
            <h2 className="article__title">{title}</h2>
            <p className="article__content">{summary}</p>
            <p>Published at {publishedDate}</p>
            {author && <p>Author: {author}</p>}
            {link && (
              <a className="article__content" href={link}>
                More information here
              </a>
            )}
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
              onClick={() => {
                setError(null);
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default (props) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Details {...props} />;
};
