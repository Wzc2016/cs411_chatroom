import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn
} from "mdbreact";
import {Navbar} from 'react-bootstrap';
import NavBar from './navBar.jsx';

export default class LogIn extends Component {
  render() {

  return (
    <li>
    <Navbar bg="light" expand="lg">
      <NavBar />
    </Navbar>
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header warm-flame-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Welcome back!
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormTextEx"
                className="grey-text font-weight-light"
              >
                Username
              </label>
              <input
                type="text"
                id="defaultFormTextEx"
                className="form-control"
              />

              <label
                htmlFor="defaultFormPasswordEx"
                className="grey-text font-weight-light"
              >
                Your password
              </label>
              <input
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit">
                  Log In
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <a href="/signup">Not a member? Sign up</a>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </li>
  )
}
}
