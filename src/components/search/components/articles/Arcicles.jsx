import defaultImg from '../../assets/img/js.gif';

export default function Articles(props) {
  const { author, content, description, publishedAt, title, url, urlToImage } =
    props.article;

  return (
    <div className="reset-list article__wrap">
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
          <p>title: {title}</p>
          <p>content: {content}</p>
          <p>description: {description}</p>
          <p>publishedAt: {publishedAt}</p>
          <p>author: {author}</p>
          <p>url: {url}</p>
        </div>
      </div>
    </div>
  );
}
