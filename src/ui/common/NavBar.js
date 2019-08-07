import React, { Component } from "react";
import { Navbar, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ cart }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>
    <Button variant="info">
        <Link to="/home" style={{color: 'white'}}>DocAvenue</Link>
    </Button>

  </Navbar.Brand>
    <Button variant="primary" style={{ position: "absolute", right: "20px" }}>
      <Link to="/cart" style={{color: 'white'}}>Cart</Link> <Badge variant="light">{cart.articles.length}</Badge>
    </Button>
  </Navbar>
);

export default NavBar;
