import actionTypes from "./types";

const initialPagination = {
  articles: [],
  size: 5,
  page: 1,
  currentPage: null
};

export default (state = initialPagination, { type, payload }) => {
  console.log(type);
  switch (type) {
    case actionTypes.SET_CURRENT_PAGE: {
      return { ...state, currentPage: payload };
    }
    case actionTypes.SET_PAGE: {
      return { ...state, page: payload };
    }
    case actionTypes.SET_SIZE: {
      return { ...state, size: payload };
    }
    default:
      return state;
  }
};
