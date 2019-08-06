import articlesActions from "./types";
import articlesService from "./services";

/* Sync Action Creators */
export const setArticles = articles => {
  return {
    type: articlesActions.SET_PRODUCTS,
    payload : {
      articles
    }
  };
};

/* Async Action Creators */
export const getArticlesList = () => dispatch => {
  articlesService.fetchArticles().then(articles => {
    dispatch(setArticles(articles));
  });
};
