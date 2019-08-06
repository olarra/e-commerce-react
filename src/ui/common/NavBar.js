import React, { Component } from "react";
import { Navbar, Button, Badge } from "react-bootstrap";

const NavBar = ({ cart }) => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">DocAvenue</Navbar.Brand>
    <Button variant="primary" style={{ position: "absolute", right: "20px" }}>
      Cart <Badge variant="light">{cart.articles.length}</Badge>
    </Button>
  </Navbar>
);

export default NavBar;
