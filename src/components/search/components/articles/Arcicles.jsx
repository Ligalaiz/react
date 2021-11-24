import defaultImg from '../../assets/img/js.gif';

export default function Articles(props) {
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
                  src={media || defaultImg}
                  alt={title}
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    e.target.onerror = null;
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
          <p>Author: {author}</p>
        </div>
      </div>
    </div>
  );
}
