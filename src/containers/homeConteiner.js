import React from "react";
import { connect } from "react-redux";
import paginate from "paginate-array";

import { getArticlesList, markAsSold } from "../redux/articles/actions";
import selectArticles from "../redux/articles/selectors";

import { setCurrentPage, setPage, setSize } from "../redux/pagination/actions";
import selectPagination from "../redux/pagination/selectors";

import { addArticleToCart, removeArticleFromCart } from "../redux/cart/actions";
import selectCart from "../redux/cart/selectors";

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

  previousPage() {
    const { setCurrentPage, setPage, articles, pagination } = this.props;
    if (pagination.page > 1) {
      const newPage = pagination.page - 1;
      const newCurrPage = paginate(articles, newPage, pagination.size);
      setPage(newPage);
      setCurrentPage(newCurrPage);
    }
  }

  nextPage() {
    const { setCurrentPage, setPage, articles, pagination } = this.props;
    console.log("pagination nextPage", pagination.page);

    if (pagination.page < pagination.currentPage.totalPages) {
      const newPage = pagination.page + 1;
      console.log("newPage", newPage);
      const newCurrPage = paginate(articles, newPage, pagination.size);
      setPage(newPage);
      setCurrentPage(newCurrPage);
    }
  }

  setSize(e) {
    const { value } = e.target;
    const { articles, setSize, setPage, setCurrentPage } = this.props;

    const newSize = +value;
    const newPage = 1;
    const newCurrPage = paginate(articles, newPage, newSize);

    setSize(newSize);
    setPage(newPage);
    setCurrentPage(newCurrPage);
  }

  render() {
    return (
      <Home
        {...this.props}
        nextPage={() => this.nextPage()}
        previousPage={() => this.previousPage()}
        setSize={e => this.setSize(e)}
      />
    );
  }
}

const mapStateToProps = state => {
  const articles = selectArticles(state);
  const pagination = selectPagination(state);
  const cart = selectCart(state);

  return {
    articles,
    pagination,
    cart
  };
};

const mapActionsToDispatch = dispatch => ({
  getArticlesList: () => dispatch(getArticlesList()),
  setCurrentPage: currPage => dispatch(setCurrentPage(currPage)),
  setPage: page => dispatch(setPage(page)),
  setSize: size => dispatch(setSize(size)),
  markAsSold : article => dispatch(markAsSold(article)),
  addArticleToCart: article => dispatch(addArticleToCart(article)),
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
)(HomeContainer);
