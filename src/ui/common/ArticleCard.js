import React, { Component } from 'react';
import { Navbar } from "react-bootstrap";


const ArticleCard = ({title, thumbnailUrl}) => (
  <Card style={{ width: "12rem", minHeight: "350px" }}>
      <Card.Img variant="top" src={thumbnailUrl} />
      <Card.Body>
        <Card.Title style={{fontSize:"12px",  minHeight: "50px" }}>{article}</Card.Title>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );


export default ArticleCard;
