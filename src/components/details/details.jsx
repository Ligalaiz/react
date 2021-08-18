import { useParams, Link, useHistory, useLocation } from 'react-router-dom';
import defaultImg from '@/assets/img/js.gif';
import { useDispatch, useSelector } from 'react-redux';
import { addErrorAction } from '@/store/errorReducer';
import getSearchDataUtils from '@/utils/getSearchData.utils';
import { useEffect } from 'react';
import { get, getQueryUtils } from '@/utils';
import './details.scss';

const Details = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const error = useSelector((state) => state.error.error);
  const router = useHistory();
  const { search } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const { pageNumber, searchRequest, pageSize, sortType } =
      getQueryUtils(search);
    getSearchDataUtils(
      {
        searchRequest,
        pageNumber,
        sortType,
        pageSize,
      },
      dispatch,
    );
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

  function handleErrorClick() {
    dispatch(addErrorAction(null));
  }

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
              onClick={handleErrorClick}
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
