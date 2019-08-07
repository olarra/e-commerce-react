import actionTypes from "./types";
const SOLD = "SOLD"
const initialTodos = { articles: [] };

export default (state = initialTodos, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ARTICLES:
      return { articles: [...payload] };
    case actionTypes.MARK_AS_SOLD:
      return ({
        ...state,
        articles: state.articles.map(
          (article, i) => i === payload.id -1 ? { ...article, status: SOLD } : article
        )
      });
    default:
      return state;
  }
};
