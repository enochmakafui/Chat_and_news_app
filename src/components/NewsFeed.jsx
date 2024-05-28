import { useEffect, useState } from "react";
import placeholderImage from "../assets/placeholder.jpg";
export default function NewsFeed() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=469cf9023ca343f49c0a6532cebf6017"
        );
        if (!response.ok) {
          throw new Error("Could not fetch news ");
        }
        const data = await response.json();
        setNewsData(data.articles);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchNews();
  }, []);
  console.log(newsData);

  return (
    <div className="p-2">
      <h2 className=" inline-block text-xl  mb-2 bg-slate-400 rounded-md p-2">
        Top Stories
      </h2>

      {newsData.length === 0 && <p>fetching news data....</p>}
      {!newsData && <p>Could not fetch news</p>}
      <div className="flex flex-row gap-4 flex-wrap h-full ">
        {newsData &&
          newsData.map((news) => {
            return (
              <article
                key={news.title}
                className="flex flex-row rounded-md h-auto  gap-4 bg-white p-3"
              >
                {news.urlToImage ? (
                  <img
                    src={news.urlToImage}
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
                  <p className=" font-bold text-newsTextColor">{news.title}</p>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
}
