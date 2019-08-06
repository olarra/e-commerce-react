import React, { Component } from "react";
// import Main from "../components/Main";
// import SideBar from "../components/SideBar";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Badge,
  ButtonToolbar
} from "react-bootstrap";
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
    const {
      articles,
      pagination,
      previousPage,
      nextPage,
      setSize
    } = this.props;

    const selection = Array.from(articles).slice(1, 5);

    return (
      <div className="c-home">
        <NavBar />
        <Container>
          <Row
            style={{
              marginTop: "40px",
              marginLeft: "5px",
              marginBottom: "40px"
            }}
          >
            <Col>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="size">
                  <select name="size" id="size" onChange={e => setSize(e)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                  </select>
                </ButtonGroup>

                <ButtonGroup className="mr-2" aria-label="Second group">
                  <Button onClick={previousPage}>Previous Page</Button>
                </ButtonGroup>

                <ButtonGroup aria-label="Third group">
                  <Button onClick={nextPage}>Next Page</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
            <Col style={{ display: "flex" }}>
              <h5>
                Page: <Badge variant="secondary">{pagination.page}</Badge>
              </h5>
              <h5 style={{ marginLeft: "15px" }}>
                Size: <Badge variant="secondary">{pagination.size}</Badge>
              </h5>
            </Col>
          </Row>

          {pagination.currentPage
            ? this.renderList(pagination)
            : this.renderEmpty()}
        </Container>
      </div>
    );
  }
}
