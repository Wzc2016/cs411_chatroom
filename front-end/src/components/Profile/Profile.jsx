import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import NavBar from '../NavBar.jsx';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import './Profile.scss'

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
        <NavBar />
      <div className="ProfileCss">
      <div class="pictureCss">&nbsp;</div>
        <h3 className="text-center">Wish List</h3>
        {this.state.list.map(item => <div key={item.id}>{item.title}</div>)}
      </div>
      <div>
      <h3 className="text-center">Movies you might like</h3>
      </div>
    </div>


    )
  }
}
