import React, { Component } from "react";
// import Main from "../components/Main";
// import SideBar from "../components/SideBar";
import { Container, Row, Col, Card, Pagination, Button } from "react-bootstrap";
import NavBar from "../common/NavBar";
export class Home extends Component {
  renderEmpty() {
    return <div>No Articles</div>;
  }
  renderList(articles) {
    return (
      <Row>
        {articles.map((article, i) => (
          <Col xs={3} key={i}>
            {this.renderCard(article)}
          </Col>
        ))}
      </Row>
    );
  }

  renderCard(article) {
    return (
      <Card style={{ width: "12rem", minHeight: "350px" }}>
        <Card.Img variant="top" src={article.thumbnailUrl} />
        <Card.Body>
          <Card.Title style={{fontSize:"12px",  minHeight: "50px" }}>{article.title}</Card.Title>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }

  render() {
    const { articles } = this.props;
    const selection = Array.from(articles).slice(1, 5);
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div className="c-home">
        <NavBar></NavBar>
        <Container>
          <Pagination>{items}</Pagination>

          {articles.length ? this.renderList(selection) : this.renderEmpty()}
        </Container>
      </div>
    );
  }
}
