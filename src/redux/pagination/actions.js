import paginationActions from "./types";

/* Sync Action Creators */
export const setCurrentPage = currentPage => {
  return { type: paginationActions.SET_CURRENT_PAGE, payload: currentPage };
};

export const setPage = page => {
  console.log("page", page);
  return { type: paginationActions.SET_PAGE, payload: page };
};
