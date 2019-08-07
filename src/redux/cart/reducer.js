import actionTypes from "./types";

const initialPagination = {
  articles: []
};

export default (state = initialPagination, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCT_TO_CART: {
      return { articles: [...state.articles, payload] };
    }
    case actionTypes.REMOVE_PRODUCT_FROM_CART: {
      const test = state.articles.filter(
        article => article.id !== payload["id"]
      );
      return { articles: test };
    }
    default:
      return state;
  }
};
