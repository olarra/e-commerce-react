import React from "react";
import { connect } from "react-redux";
import paginate from "paginate-array";

import { removeArticleFromCart } from "../redux/cart/actions";
import selectCart from "../redux/cart/selectors";

import { Cart } from "../ui/pages/Cart";

class CartContainer extends React.Component {


  render() {
    return (
      <Cart {...this.props}/>
    );
  }
}

const mapStateToProps = state => {
  const cart = selectCart(state);

  return {
    cart
  };
};

const mapActionsToDispatch = dispatch => ({
  removeArticleFromCart: article => dispatch(removeArticleFromCart(article))
});

const mergeProps = (state, actions) => ({
  ...state,
  ...actions
});

export default connect(
  mapStateToProps,
  mapActionsToDispatch,
  mergeProps
)(CartContainer);
