import cartActions from "./types";

/* Sync Action Creators */
export const addArticleToCart = article => {
  console.log("ACTIONS addArticleToCart", article);
  return {
    type: cartActions.ADD_PRODUCT_TO_CART,
    payload: article
  };
};

export const removeArticleFromCart = article => {
  return {
    type: cartActions.REMOVE_PRODUCT_FROM_CART,
    payload: article
  };
};
