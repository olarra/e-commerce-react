import actionTypes from "./types";
const SOLD = "SOLD";
const AVAILABLE = "AVAILABLE";

const initialTodos = { articles: [] };

export default (state = initialTodos, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ARTICLES:
      return { articles: [...payload] };
    case actionTypes.MARK_AS_SOLD:
      return {
        ...state,
        articles: state.articles.map((article, i) =>
          i === payload.id - 1 ? { ...article, status: SOLD } : article
        )
      };
    case actionTypes.MARK_AS_AVAILABLE:
      return {
        ...state,
        articles: state.articles.map((article, i) => {
          return i === payload.id - 1
            ? { ...article, status: AVAILABLE }
            : article;
        })
      };
    default:
      return state;
  }
};
