import articlesActions from "./types";
import articlesService from "./services";

/* Sync Action Creators */
export const setArticles = articles => {
  console.log("setting articles",articles)
  return {
    type: articlesActions.SET_ARTICLES,
    payload : articles
  };
};

export const markAsSold = article => {
  return {
    type: articlesActions.MARK_AS_SOLD,
    payload : article
  };
};

/* Async Action Creators */
export const getArticlesList = () => dispatch => {
  articlesService.fetchArticles().then(articles => {
    dispatch(setArticles(articles));
  });
};
