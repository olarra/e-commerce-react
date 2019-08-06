import actionTypes from "./types";

const initialTodos = { articles: [] };

export default ( state = initialTodos, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_ARTICLES:
      return payload.articles;
    default:
      return state;
  }
};
