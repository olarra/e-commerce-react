import React from "react";
import { connect } from "react-redux";

import { getArticleList } from "../../redux/articles/actions";
import selectArticles from "../../redux/articles/selectors";

// import { getShopInformation } from "@redux/shop/actions";
// import selectShop from "@redux/shop/selectors";

 import Home from "../pages/Home";


class HomeContainer extends React.Component {
  componentDidMount() {
    const { getProductsList } = this.props;
    getProductsList();
    // getShopInformation();
  }
  render() {
    return <Home {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  const articles = selectArticles(state);
  // const shop = selectShop(state);

  return {
    articles: articles || []
  };
};

const mapActionsToDispatch = (dispatch) => ({
  getArticleList: () => dispatch(getArticleList())
  // getShopInformation: () => dispatch(getShopInformation())
});

const mergeProps = (state, actions) => ({
  ...state,
  ...actions
});

export default connect(
  mapStateToProps,
  mapActionsToDispatch,
  mergeProps
)(HomeContainer);
