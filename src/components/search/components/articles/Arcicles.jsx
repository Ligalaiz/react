import defaultImg from '../../assets/img/js.gif';

export default function Articles(props) {
  const { author, description, publishedAt, title, urlToImage } = props.article;
  const date = new Date(publishedAt);
  const month = date.getMonth();
  const day = date.getDay();
  const currentDate = `${date.getFullYear()}-${
    month < 10 ? `0${month}` : month
  }-${day < 10 ? `0${day}` : day}`;

  return (
    <div className="article__wrap">
      <div className="article">
        <div className="article__image imgage__wrap">
          <div className="rounded-lg">
            <figure role="presentation" className="bio-image bio-image--white">
              <div className="bio-image-wrapper">
                <img
                  className="bio-image-image"
                  src={urlToImage || defaultImg}
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
          <p className="short-description">{description}</p>
          <p>Published at {currentDate}</p>
          <p>Author: {author}</p>
        </div>
      </div>
    </div>
  );
}
