import React, { Component } from "react";
// import Main from "../components/Main";
// import SideBar from "../components/SideBar";
import { Container, Row, Col, Card, Pagination, Button } from "react-bootstrap";
import { NavBar, ArticleCard } from "../common";

export class Home extends Component {
  renderEmpty() {
    return <div>No Articles</div>;
  }

  renderList(pagination) {
    console.log("pagination", pagination);

    return (
      <Row>
        {pagination.currentPage.data.map((article, i) => (
          <Col xs={3} key={i} style={{ marginBottom: "40px" }}>
            {this.renderCard(article)}
          </Col>
        ))}
      </Row>
    );
  }

  renderCard(article) {
    return <ArticleCard article={article} />;
  }

  render() {
    const { articles, pagination, previousPage, nextPage } = this.props;

    const selection = Array.from(articles).slice(1, 5);

    return (
      <div className="c-home">
        <NavBar />
        <Container>
          <div>page: {pagination.page}</div>
          <div>size: {pagination.size}</div>
          <button onClick={previousPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
          {pagination.currentPage
            ? this.renderList(pagination)
            : this.renderEmpty()}
        </Container>
      </div>
    );
  }
}
