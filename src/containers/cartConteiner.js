import React from "react";
import { connect } from "react-redux";
import paginate from "paginate-array";

import { removeArticleFromCart } from "../redux/cart/actions";
import { markAsAvailable } from "../redux/articles/actions";
import selectArticles from "../redux/articles/selectors";
import { withRouter } from "react-router-dom";

import selectCart from "../redux/cart/selectors";

import { Cart } from "../ui/pages/Cart";

class CartContainer extends React.Component {
  render() {
    return <Cart {...this.props} />;
  }
}

const mapStateToProps = state => {
  const articles = selectArticles(state);
  const cart = selectCart(state);

  return {
    articles,
    cart
  };
};

const mapActionsToDispatch = dispatch => ({
  removeArticleFromCart: article => dispatch(removeArticleFromCart(article)),
  markAsAvailable: article => dispatch(markAsAvailable(article))
});

const mergeProps = (state, actions) => ({
  ...state,
  ...actions
});

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToDispatch,
    mergeProps
  )(CartContainer)
);
