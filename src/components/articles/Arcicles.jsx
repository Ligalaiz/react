import defaultImg from '../../assets/img/js.gif';

export default function Articles(props) {
  const { title, author = '', link, published_date, excerpt, content,media } =
    props.article;

  return (
    <div className="reset-list article__wrap">
      <div className="article">
        <div className="article__image imgage__wrap">
          <img
            width="300"
            src={media || defaultImg}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        </div>
        <div className="article__description">
          <p>title: {title}</p>
          <p>description: {excerpt}</p>
          <p>publishedAt: {published_date}</p>
          <p>author: {author}</p>
          <p>url: {link}</p>
        </div>
      </div>
    </div>
  );
}
