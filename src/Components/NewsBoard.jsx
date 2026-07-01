import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=us${
          category ? `&category=${category}` : ""
        }&apikey=${import.meta.env.VITE_API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.errors) {
          console.error(data.errors);
          return;
        }

        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="row g-4 justify-content-center">
        {articles.map((news) => (
          <div key={news.id} className="col-12 col-md-6 col-lg-4">
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;