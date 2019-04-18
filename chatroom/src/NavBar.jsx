import React, { Component } from 'react';
import './NavBar.css'
import { Button, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
export default class NavBar extends Component {

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar fixed="top" />
        <Navbar.Brand>Movie, Movie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <a href="http://localhost:3000/search">
              Home
            </a>
            <br/>
          </Nav>
          <Nav>
            <br/>
            <a className="text-right" href="http://localhost:3000/signin">
              Sign Up/Log In
            </a>
            <br/>
            <a className="text-right" href="http://localhost:3000/search">
              Log Out
            </a>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }
}
