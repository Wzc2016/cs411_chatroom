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

  this.baseUrl = 'http://localhost:8000/userid/';
  this.renderAgain = this.renderAgain.bind(this);
  let userId = window.sessionStorage.getItem('userId');

  axios.get(this.baseUrl + userId).then((response) => {

    var axiosList = response.data[0].movie_list.split(',').map((mid) => {
        axios.get("http://localhost:8000/search/movieid/" + mid).then((res) => {
        var i = (
          <div>
            {res.data[0].title}
          </div>
          )

        this.setState({
          list: [...this.state.list, i]
        })
      })
    })

  })

  
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
          <div className="movie-list-css">
            {this.state.list}
          </div>
      </div>
    </div>


    )
  }
}
