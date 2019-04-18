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
import NavBar from '../NavBar.jsx';
import axios from 'axios'


export default class SignUp extends Component {


  constructor() {
    super();
    
    this.state={
      username: '',
      password: '',
      userId: '',
    }
    this.baseUrl = 'http://localhost:8000/users/';
    this.clickHandler = this.clickHandler.bind(this);
    this.usr_onChangeHandler = this.usr_onChangeHandler.bind(this);
    this.pwd_onChangeHandler = this.pwd_onChangeHandler.bind(this);
  }

  clickHandler(event) {
    axios.post(this.baseUrl, {
      user_name: this.state.username,
      password: this.state.password,
    }).then((response) => {
        window.sessionStorage.setItem('userId', response.data[0].uid);
        this.props.history.push('/search');
    }); 
  }

  usr_onChangeHandler(e) {
    this.setState({
      username: e.target.value
    })
  }

  pwd_onChangeHandler(e) {
    this.setState({
      password: e.target.value
    })
  }


  render() {

  return (
  <div className="w-100">
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
                  <MDBIcon icon="lock"/> Sign up here!
                </h3>
              </MDBCardHeader>
              <label
                htmlFor="defaultFormTextEx"
                className="grey-text font-weight-light"
              >
                Username
              </label>
              <input
                onChange={this.usr_onChangeHandler}
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
                onChange={this.pwd_onChangeHandler}
                type="password"
                id="defaultFormPasswordEx"
                className="form-control"
              />

              <div className="text-center mt-4">
                <MDBBtn color="deep-orange" className="mb-3" type="submit" onClick={this.clickHandler}>
                  Sign Up
                </MDBBtn>
              </div>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <a href="/login">Have an account? Log in</a>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}
}
