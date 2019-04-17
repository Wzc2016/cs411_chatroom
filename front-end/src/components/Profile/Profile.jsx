import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import NavBar from '../NavBar.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";


export default class Profile extends Component {
  constructor() {
  super();

  this.state = {
    queryList: [],
    list: [],
    userId: ''
  };

  this.baseUrl = 'http://localhost:8000/users/';
  this.renderAgain();
  }
  renderAgain() {
    axios.get(this.baseUrl + this.state.userId).then((response) => {
    this.setState({
      queryList: response.movie_list
    });
    })
    if(!this.state.queryList) {
      this.setState({
        list: this.state.queryList.split(',')
      })
    }
  }


  render() {
    return (
      <div className="w-100">
      <Navbar bg="light" expand="lg">
        <NavBar />
      </Navbar>
      <div className="btn-group-vertical">
        <Link to="/recommend">
          <button type="button" className="btn btn-secondary">
              Recommend
          </button>
        </Link>
        <a href="http://localhost:3300">
          <button type="button" className="btn btn-secondary">
              Chat Room
          </button>
        </a>
      </div>
      <div className="container-fluid">
        <h3 className="text-center">Wish List</h3>
        {this.state.list.map(item => <div key={item.id}>{item.title}</div>)}
      </div>
    </div>


    )
  }
}
