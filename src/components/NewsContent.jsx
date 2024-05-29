import { useParams, Link } from "react-router-dom";

const NewsContent = () => {
  const params = useParams();
  const newsData = JSON.parse(localStorage.getItem("newsData")) || [];
  const selectedNews = newsData.filter(
    (newsItem) => newsItem.title === params.title
  );
  return (
    <article className="rounded-md bg-white p-2 mt-16">
      <img
        src={selectedNews[0].image}
        alt={selectedNews[0].title}
        className="rounded-md"
      />
      <p className="text-newsTextColor font-bold text-xl my-4">
        {selectedNews[0].title}.
      </p>
      <p className="text-newsTextColor leading-9">{selectedNews[0].content}</p>
      <Link to={selectedNews[0].url}>read more</Link>
    </article>
  );
};

export default NewsContent;
