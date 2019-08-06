import React, { Component } from 'react';
// import Main from "../components/Main";
// import SideBar from "../components/SideBar";
import { Container, Row, Col,Card, Pagination, Button } from "react-bootstrap";
import NavBar from '../common/NavBar'
export class Home extends Component {

  renderEmpty() {
    return (<div>No Articles</div>)
  }
  renderList(articles) {
    return articles.map(article => this.renderCard(article));
  }

  renderCard(article) {
    return (
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={article.thumbnailUrl} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      );
  }

  render() {
    const { articles } = this.props;

    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

    return (<div class="c-home"><NavBar></NavBar>
          <Container>

              <Pagination>{items}</Pagination>

          // {articles.length ? this.renderList(articles) : this.renderEmpty()}

        </Container></div>
);
  }

}
