const NewsItem = ({ title, description, src, url }) => {
  const imageUrl = src || "https://via.placeholder.com/345x180?text=No+Image";
  const bodyText = description || "No description available.";

  return (
    <div className="card h-100 bg-dark text-light">
      <img src={src} className="card-img-top" alt={title || "news image"} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={url} className="btn btn-primary mt-3" target="_blank" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
