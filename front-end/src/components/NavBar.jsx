import React, { Component } from 'react';


import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
export default class NavBar extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand href="/search">Movie, Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/search">Home</Nav.Link>
            <a class="btn" href="http://localhost:3300">Chat Room</a>
          </Nav>

          <div class="text-right">
          <Nav className="mr-auto">
            <Nav.Link href="/profile">User</Nav.Link>
            <Nav.Link href="/signup">Sign Up/Log In</Nav.Link>
            <Nav.Link href="/home">Log Out</Nav.Link>
        </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}
