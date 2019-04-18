import React, { Component } from 'react';


import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
export default class NavBar extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand href="/home">Movie, Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>

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
