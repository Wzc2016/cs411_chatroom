import React, { Component } from 'react';
import './NavBar.css'
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
export default class NavBar extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand href="/home">Movie, Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <a href="http://localhost:3000/search">
              Home
            </a>
            <br/>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="mr-auto">
            <br/>
            <a href="http://localhost:3000/signin">
              Sign Up/Log In
            </a>
            <br/>
            <a href="http://localhost:3000/search">
              Log Out
            </a>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}
