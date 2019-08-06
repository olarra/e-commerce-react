import React from "react";
import { connect } from "react-redux";

import { getArticlesList } from "../redux/articles/actions";
import selectArticles from "../redux/articles/selectors";

// import { getShopInformation } from "@redux/shop/actions";
// import selectShop from "@redux/shop/selectors";

 import {Home} from "../ui/pages/Home";


class HomeContainer extends React.Component {
  componentDidMount() {
    const { getArticlesList } = this.props;
    getArticlesList();
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
    articles: articles.slice(0,10) || []
  };
};

const mapActionsToDispatch = (dispatch) => ({
  getArticlesList: () => dispatch(getArticlesList())
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
