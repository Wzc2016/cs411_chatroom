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
import axios from 'axios';


export default class LogIn extends Component {

  constructor() {
    super();

    this.state={
      username: '',
      password: '',
      userId: '',
    }
    this.baseUrl = 'http://localhost:8000/username/';
    this.clickHandler = this.clickHandler.bind(this);
    this.usr_onChangeHandler = this.usr_onChangeHandler.bind(this);
    this.pwd_onChangeHandler = this.pwd_onChangeHandler.bind(this);
  }

  clickHandler(event) {
    axios.get(this.baseUrl + this.state.username).then((response) => {
      if(this.state.password == response.data[0].password) {
        window.sessionStorage.setItem('userId', response.data[0].uid);
        this.props.history.push('/search');
      } else {
        this.props.history.push('/login');
      }
      
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
    <div className="w-100 h-100">
    <Navbar bg="light" expand="lg">
      <NavBar />
    </Navbar>
    <MDBContainer className="h-100">
      <MDBRow className="h-100 d-flex align-items-center justify-content-center">
        <MDBCol className="w-100" md="6">
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
    </div>
  )
}
}
