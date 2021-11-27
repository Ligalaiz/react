/** @jsxImportSource @emotion/react */
import React, { FC, useState, useEffect } from 'react';
import {
  Link,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import defaultImg from '@assets/img/js.gif';
import { getDetailsDataUtils } from '@utils/getDetailsData.utils';
import { get } from '@utils/storage.utils';
import {
  detailsLink,
  articleStyle,
  articleWrap,
  articleDescription,
  articleImage,
  articleTitle,
  articleContent,
} from './DetailsStyle';
import { IArticles } from '@src/interfaces';

const DetailsConsist: FC = () => {
  const navigate = useNavigate();
  const { search } = useLocation<{ search: string }>();
  const { id } = useParams();
  const [error, setError] = useState<any>(null);
  const [items, setItems] = useState<IArticles[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getDetailsDataUtils({
      setItems,
      search,
      setError,
      searchParams,
    });
  }, []);

  const localItems = get('items');
  if (!localItems || localItems.length === 0 || !items) return null;

  const index = localItems.findIndex((item: IArticles) => item.id === id);
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

  return (
    <>
      <div className="article__wrap" css={articleWrap}>
        <div className="article" css={articleStyle}>
          <div className="article__image image__wrap" css={articleImage}>
            <img
              width="300"
              src={media}
              alt={title}
              onError={(e) => {
                const target = e.target as typeof e.target & {
                  onerror: any;
                  src: string;
                };
                target.onerror = null;
                target.src = defaultImg;
              }}
            />
          </div>
          <div className="article__description" css={articleDescription}>
            <h2 className="article__title" css={articleTitle}>
              {title}
            </h2>
            <p className="article__content" css={articleContent}>
              {summary}
            </p>
            <p>Published at {publishedDate}</p>
            {author && <p>Author: {author}</p>}
            {link && (
              <a className="article__content" href={link} css={articleContent}>
                More information here
              </a>
            )}
          </div>
          <div>
            <Link
              className="details__link"
              css={detailsLink}
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
              css={detailsLink}
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

export { DetailsConsist };
