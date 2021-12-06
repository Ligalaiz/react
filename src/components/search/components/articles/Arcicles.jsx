import defaultImg from '../../assets/img/js.gif';

const Articles = (props) => {
  const {
    title,
    author = '',
    published_date: publishedDate,
    excerpt,
    media,
  } = props.article;

  return (
    <div className="reset-list article__wrap">
      <div className="article">
        <div className="article__image imgage__wrap">
          <div className="rounded-lg">
            <figure role="presentation" className="bio-image bio-image--white">
              <div className="bio-image-wrapper">
                <img
                  className="bio-image-image"
                  src={media}
                  alt={title}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = defaultImg;
                  }}
                />
              </div>
            </figure>
          </div>
        </div>
        <div className="article__description">
          <h2 className="article__title">{title}</h2>
          <p className="short-description">{excerpt}</p>
          <p>Published at {publishedDate}</p>
          {author && <p>Author: {author}</p>}
        </div>
      </div>
    </div>
  );
};

export { Articles };
