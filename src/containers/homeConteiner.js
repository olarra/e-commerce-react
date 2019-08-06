import React from "react";
import { connect } from "react-redux";

import { getArticlesList } from "../redux/articles/actions";
import selectArticles from "../redux/articles/selectors";
import paginate from "paginate-array";

import { setCurrentPage, setPage } from "../redux/pagination/actions";
import selectPagination from "../redux/pagination/selectors";

import { Home } from "../ui/pages/Home";

class HomeContainer extends React.Component {
  componentDidMount() {
    const { getArticlesList, articles, pagination } = this.props;
    getArticlesList();

    // const currPage = paginate(articles, pagination.page, pagination.size);
    // setCurrentPage(currPage);

    // getShopInformation();
  }

  componentDidUpdate(prevProps) {
    const { setCurrentPage, articles, pagination } = this.props;
    if (articles !== prevProps.articles) {
      const currPage = paginate(articles, pagination.page, pagination.size);
      console.log("currPage", currPage);
      setCurrentPage(currPage);
    }
  }

  nextPage() {
    const { setCurrentPage, articles, pagination } = this.props;
    console.log("pagination nextPage", pagination);

    if (pagination.page < pagination.currentPage.totalPages) {
      const newPage = pagination.page++;
      const newCurrPage = paginate(articles, newPage, pagination.size);
      setPage(newPage);
      setCurrentPage(newCurrPage);
    }
  }

  render() {
    return <Home {...this.props} nextPage={() => this.nextPage()} />;
  }
}

const mapStateToProps = state => {
  const articles = selectArticles(state);
  const pagination = selectPagination(state);

  return {
    articles,
    pagination
  };
};

const mapActionsToDispatch = dispatch => ({
  getArticlesList: () => dispatch(getArticlesList()),
  setCurrentPage: currPage => dispatch(setCurrentPage(currPage)),
  setPage: page => dispatch(setPage(page))
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
