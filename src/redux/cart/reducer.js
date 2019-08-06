import actionTypes from "./types";

const initialPagination = {
  articles: []
};

export default (state = initialPagination, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case actionTypes.ADD_PRODUCT_TO_CART: {
      return { articles: [...state.articles, payload] };
    }
    case actionTypes.REMOVE_PRODUCT_FROM_CART: {
      return state.articles.filter((article, index) => index !== payload["id"]);
    }
    default:
      return state;
  }
};
