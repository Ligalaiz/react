import { IArticlesWraped } from '@src/interfaces';
import React, { FC } from 'react';
import {
  articleStyle,
  articleImage,
  articleDescription,
  articleImageWrap,
} from './ArticlesStyles';
import defaultImg from '@assets/img/js.gif';

export const Articles: FC<IArticlesWraped> = ({ article }) => {
  const {
    title,
    author = '',
    link,
    published_date: publishedDate,
    excerpt,
    media,
  } = article;

  return (
    <div className="reset-list article__wrap">
      <div className="article" css={articleStyle}>
        <div className="article__image imgage__wrap" css={articleImageWrap}>
          <img
            width="300"
            css={articleImage}
            src={media}
            alt={title}
            onError={(e: any) => {
              const target = e.target as typeof e.target & {
                onerror: any;
              };
              target.onerror = null;
              target.src = defaultImg;
            }}
          />
        </div>
        <div className="article__description" css={articleDescription}>
          <p>title: {title}</p>
          <p>description: {excerpt}</p>
          <p>publishedAt: {publishedDate}</p>
          {author && <p>author: {author}</p>}
          <p>url: {link}</p>
        </div>
      </div>
    </div>
  );
};
