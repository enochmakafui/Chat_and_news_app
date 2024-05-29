import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/placeholder.jpg";

// news is loading any time the page is navigated back to
export default function NewsFeed() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const storedData = localStorage.getItem("newsData");
        if (storedData) {
          setNewsData(JSON.parse(storedData));
          setLoading(false);
        } else {
          const response = await fetch(
            "https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&apikey=8ad657552d96841ef76ef0c796434e8c"
          );
          if (!response.ok) {
            throw new Error("Could not fetch news ");
          }
          const data = await response.json();
          setNewsData(data.articles);
          localStorage.setItem("newsData", JSON.stringify(data.articles));
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    if (newsData.length === 0) {
      fetchNews();
    }
  }, [newsData.length]);

  return (
    <div className="p-2">
      <h2 className=" inline-block text-xl  mt-16 bg-slate-400 rounded-md p-2">
        Top Stories
      </h2>
      {loading && <p>loading news ....</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-row gap-4 flex-wrap h-full ">
        {newsData &&
          newsData.map((news) => {
            return (
              <article
                key={news.title}
                className="flex flex-row rounded-md h-auto  gap-4 bg-white p-3"
              >
                {news.image ? (
                  <img
                    src={news.image}
                    className="rounded-md w-1/2"
                    alt="Image not available"
                  />
                ) : (
                  <img
                    src={placeholderImage}
                    className="rounded-md w-1/2"
                    alt="placeholder image"
                  />
                )}
                <div>
                  {" "}
                  <p className="inline-block bg-slate-400 rounded-md p-1 font-bold text-xs">
                    {news.source.name}
                  </p>
                  <p className=" font-bold text-newsTextColor">
                    <Link to={`/${news.title}`}>{news.title}</Link>
                  </p>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
}
