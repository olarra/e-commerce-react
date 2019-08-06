import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

const ArticleCard = ({ article, addArticleToCart }) => (
  <Card style={{ width: "12rem", minHeight: "350px" }}>
    <Card.Img variant="top" src={article.thumbnailUrl} />
    <Card.Body>
      <Card.Title style={{ fontSize: "12px", minHeight: "50px" }}>
        {article.title}
      </Card.Title>
      <Button variant="primary" onClick={() => addArticleToCart(article)}>
        Add to cart
      </Button>
    </Card.Body>
  </Card>
);

export default ArticleCard;
