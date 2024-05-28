import { useEffect, useState } from "react";
export default function NewsFeed() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=155PLcrJwPAoWcwadRVEHGLA2uHztAnx",
        );
        if (!response.ok) {
          throw new Error("Could not fetch news ");
        }
        const data = await response.json();
        setNewsData(data.results);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchNews();
  }, []);

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
                className="flex flex-row rounded-md h-36 bg-slate-200 gap-4"
              >
                <img
                  src={
                    news.multimedia &&
                    news.multimedia[0] &&
                    news.multimedia[0].url
                  }
                  className=" rounded-tl-md rounded-bl-md w-1/2"
                />

                <p className="font-bold truncate-5-lines">{news.title}</p>
              </article>
            );
          })}
      </div>
    </div>
  );
}
