import { newsActions } from "./index";
export const NewsActions = () => {
  return async (dispatch) => {
    const fectchRequest = async () => {
      const response = fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=469cf9023ca343f49c0a6532cebf6017"
      );
      if (!response.ok) {
        throw new Error("Could not fetch news");
      }
      const data = await response.json();
      dispatch(newsActions.replaceNewsItem(data.articles || []));
    };
    try {
      fectchRequest();
    } catch (error) {
      console.error(error.message);
    }
  };
};
