import React, { FC } from 'react';
import defaultImg from '@assets/img/js.gif';
import { IArticlesWraped } from '@src/interfaces';
import {
  articleDescription,
  articleImage,
  articleImageWrap,
  articleStyle,
  articleWrap,
  articleShortDescription,
  articleTitle,
} from './ArticlesStyles';

const Articles: FC<IArticlesWraped> = ({ article }) => {
  const {
    title,
    author = '',
    published_date: publishedDate,
    excerpt,
    media,
  } = article;

  return (
    <div className="reset-list article__wrap" css={articleWrap}>
      <div className="article" css={articleStyle}>
        <div className="article__image image__wrap" css={articleImageWrap}>
          <div className="rounded-lg">
            <figure role="presentation" className="bio-image bio-image--white">
              <div className="bio-image-wrapper">
                <img
                  className="bio-image-image"
                  css={articleImage}
                  src={media}
                  alt={title}
                  loading="eager"
                  decoding="async"
                  onError={(e: any) => {
                    const target = e.target as typeof e.target & {
                      onerror: any;
                    };
                    target.onerror = null;
                    target.src = defaultImg;
                  }}
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="article__description" css={articleDescription}>
          <h2 className="article__title" css={articleTitle}>
            {title}
          </h2>
          <p className="short-description" css={articleShortDescription}>
            {excerpt}
          </p>
          <p>Published at {publishedDate}</p>
          {author && <p>Author: {author}</p>}
        </div>
      </div>
    </div>
  );
};

export { Articles };
