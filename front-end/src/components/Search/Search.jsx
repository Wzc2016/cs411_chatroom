import React, { Component } from 'react'
import { Button, Input, Card } from 'semantic-ui-react'
import axios from 'axios'
import NavBar from '../NavBar.jsx'

import './Search.scss'
import '../Movie/Movie.scss'

class Search extends Component {

  constructor() {
    super();

    this.state = {
      value: '',
      movie: {},
      content: '',
      query: '',
      queryList: []
    };

    this.baseUrl = 'http://localhost:8000/search/movies/';
    this.inputChangeHandler_search = this.inputChangeHandler_search.bind(this);
    this.clickHandlerSearch = this.clickHandlerSearch.bind(this);
    this.imgClickHandler = this.imgClickHandler.bind(this);
  }

  inputChangeHandler_search(event) {
    this.setState({ query: event.target.value });
  }

  imgClickHandler(value) {
    this.props.history.push('/details/' + value)
  }


  clickHandlerSearch(event) {
    if(this.state.query || this.state.queryList) {
      axios.get(this.baseUrl + this.state.query).then((response) => {
      this.setState({
        queryList: response.data.map((review, ) => {
          return (
            <li className="center-me medium-font">
              <br />
              <img key={review.id} onClick={() => {return this.imgClickHandler(review.id)}} src="https://res.cloudinary.com/dxit5qwki/image/upload/v1552335256/1.png"/>
              <br/>
                <Card>
                  Movie: {review.title}
                </Card>
              <br/>
              <br/>
            </li>
            )
        })
      });
    })
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="MovieCss">  

          <h1 >Let's Search for a Movie!</h1>
          <Input
            onChange={this.inputChangeHandler_search}
            label='Movie'
            placeholder='The name of movie here!'
            value={this.state.query}
          />
          <br/>
          <Button onClick={this.clickHandlerSearch}>
            Search
          </Button>
          {this.state.queryList}
        </div>
      </div>
      )
  }
}

export default Search