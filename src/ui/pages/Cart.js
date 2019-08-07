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
import { NavBar, CartCard } from "../common";

export class Cart extends Component {
  renderEmpty() {
    return <div>No Articles in cart</div>;
  }

  renderList(cart) {
    return (
      <Row>
        {cart.articles.map((article, i) => (
          <Col xs={3} key={i} style={{ marginBottom: "40px" }}>
            {this.renderCard(article)}
          </Col>
        ))}
      </Row>
    );
  }

  renderCard(article) {
    const { removeArticleFromCart } = this.props;
    return (
      <CartCard
        article={article}
        removeArticleFromCart={article => removeArticleFromCart(article)}
      />
    );
  }

  render() {
    const {  cart } = this.props;
    console.log("cart",cart)
    return (
      <div className="c-home">
        <NavBar cart={cart} />
        <Container>
          {cart.articles.length
            ? this.renderList(cart)
            : this.renderEmpty()}

        </Container>
      </div>
    );
  }
}
