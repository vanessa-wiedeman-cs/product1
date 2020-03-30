import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Pages() {
  return (
    <Navbar sticky="top" bg="dark" variant="dark">
    <Navbar.Brand href="#">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#start">Start</Nav.Link>
      <Nav.Link href="#login">Login</Nav.Link>
    </Nav>
  </Navbar>
  
  );
}

export default Pages;