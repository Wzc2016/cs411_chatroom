import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'

// import MovieView from './MovieView/MovieView'

import './Movie.scss'

class Movie extends Component {

  constructor() {
    super();

    this.state = {
      value: '',
      movie: {},
      reviewsList: '',
      content: '',
      group: '',
      query: '',
      movie1: '',
      movie2: '',
      searchList: '',
      unionList: ''
    };

    this.baseUrl = 'http://localhost:8000/reviews/';

    this.inputChangeHandler_movie = this.inputChangeHandler_movie.bind(this);
    this.inputChangeHandler_content = this.inputChangeHandler_content.bind(this);
    this.inputChangeHandler_search = this.inputChangeHandler_search.bind(this);
    this.inputChangeHandler_movie1 = this.inputChangeHandler_movie1.bind(this);
    this.inputChangeHandler_movie2 = this.inputChangeHandler_movie2.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.clickHandlerSearch = this.clickHandlerSearch.bind(this);
    this.clickHandlerUnion = this.clickHandlerUnion.bind(this);
    this.renderAgain();
  }

  renderAgain() {
    axios.get(this.baseUrl + 'group').then((response) => {
      
      this.setState({
        group: response.data.map((result) => {
          // console.log(result);
          return (
            <li>
              Movie: {result.Movie}
              <br/>
              Number of reviews: {result.count}
              <br/>
              <br/>
            </li>
            );
        })
      })
    })

    axios.get(this.baseUrl).then((response) => {
      // console.log(response);
      this.setState({
        movie: response.data,
        reviewsList: response.data.map((review) => {
          return (
            <li>
              <button onClick={function () {return this.handleDelete(review.Id)}}>
                Delete
              </button>
              Movie: {review.Movie}
              <br/>
              <br/>
              Content: {review.Content}
              <br/>
              <br/>
              <button onClick={()=> this.handleLike(review.Id, review.Num_likes, review.Num_dislikes)}>
                Like: {review.Num_likes}
              </button>
              <button onClick={()=> this.handleDislike(review.Id, review.Num_likes, review.Num_dislikes)}>
                Dislike: {review.Num_dislikes}
              </button>
              <br/>
              <br/>
              <br/>
            </li>
            )
        })
      });
    });


    axios.post(this.baseUrl + 'union', {
      Movie1: this.state.movie1,
      Movie2: this.state.movie2
    }).then((response) => {
      this.setState({
        unionList: response.data.map((review) => {
          return (
            <li>
              <button onClick={()=> this.handleDelete(review.Id)}>
                Delete
              </button>
              Movie: {review.Movie}
              <br/>
              <br/>
              Content: {review.Content}
              <br/>
              <br/>
              <button onClick={()=> this.handleLike(review.Id, review.Num_likes, review.Num_dislikes)}>
                Like: {review.Num_likes}
              </button>
              <button onClick={()=> this.handleDislike(review.Id, review.Num_likes, review.Num_dislikes)}>
                Dislike: {review.Num_dislikes}
              </button>
              <br/>
              <br/>
              <br/>
            </li>
            )
        })
      });
    });

    if(this.state.query || this.state.queryList) {
      axios.get(this.baseUrl + this.state.query).then((response) => {
      this.setState({
        queryList: response.data.map((review) => {
          return (
            <li>
              <button onClick={()=> this.handleDelete(review.Id)}>
                Delete
              </button>
              Movie: {review.Movie}
              <br/>
              <br/>
              Content: {review.Content}
              <br/>
              <br/>
              <button onClick={()=> this.handleLike(review.Id, review.Num_likes, review.Num_dislikes)}>
                Like: {review.Num_likes}
              </button>
              <button onClick={()=> this.handleDislike(review.Id, review.Num_likes, review.Num_dislikes)}>
                Dislike: {review.Num_dislikes}
              </button>
              <br/>
              <br/>
              <br/>
            </li>
            )
        })
      });
    })
    }
    

  }

  handleDelete(Id) {
    axios.delete(this.baseUrl, {
     data: { Id: Id } }).then((response) => {
      this.renderAgain();
    })
  }

  handleDislike(Id, likes, dislikes) {
    dislikes = dislikes + 1;
    axios.put(this.baseUrl, {
      Id: Id,
      Num_likes: likes,
      Num_dislikes: dislikes
    }).then((response) => {
      this.renderAgain();
    })
  }


  handleLike(Id, likes, dislikes) {
    likes = likes + 1;
    axios.put(this.baseUrl, {
      Id: Id,
      Num_likes: likes,
      Num_dislikes: dislikes
    }).then((response) => {
      this.renderAgain();
    })
  }


  clickHandler() {
    // Form the URL
    let url = this.baseUrl;
    axios.post(url, {
      Movie: this.state.value,
      Content: this.state.content,
      Num_likes: 0,
      Num_dislikes: 0
    }).then((response) => {
      this.renderAgain();
    })
    
  }

  inputChangeHandler_movie(event) {
    this.setState({ value: event.target.value });
  }

  inputChangeHandler_content(event) {
    this.setState({ content: event.target.value });
  }

  inputChangeHandler_search(event) {
    this.setState({ query: event.target.value });
  }

  inputChangeHandler_movie1(event) {
    this.setState({ movie1: event.target.value });
  }

  inputChangeHandler_movie2(event) {
    this.setState({ movie2: event.target.value });
  }

  clickHandlerSearch() {
    this.renderAgain();
  }

  clickHandlerUnion() {
    this.renderAgain();
  }


  render() {


    return (
      <div className="MovieCss">
      <h1 className="MovieHeader">Reviews</h1>
      {this.state.reviewsList}
      <br/>
      <br/>
      <br/>
      <h1 className="MovieHeader">The number of Reviews for Movies</h1>
      {this.state.group}
        <h1 className="MovieHeader">Let's Write a Review!</h1>
        <Input
          onChange={this.inputChangeHandler_movie}
          label='Movie'
          placeholder='The name of movie here!'
          value={this.state.value}
        />
        <br/>
        <Input
          onChange={this.inputChangeHandler_content}
          label='Content'
          placeholder='The content of review here!'
          value={this.state.content}
        />
        <Button onClick={this.clickHandler}>
          GET
        </Button>
        <br/>
        <br/>
        <br/>
          <h1 className="MovieHeader">Let's Search for a Review!</h1>
        <Input
          onChange={this.inputChangeHandler_search}
          label='Search'
          placeholder='Query here!'
          value={this.state.query}
        />
        <Button onClick={this.clickHandlerSearch}>
          Search
        </Button>
        <br/>
        <br/>
        <br/>
        {this.state.queryList}

        <h1 className="MovieHeader">Let's Get all Reviews from two Movies!</h1>
        <Input
          onChange={this.inputChangeHandler_movie1}
          label='movie1'
          placeholder='movie1 here!'
          value={this.state.movie1}
        />
        <Input
          onChange={this.inputChangeHandler_movie2}
          label='movie2'
          placeholder='movie2 here!'
          value={this.state.movie2}
        />
        <Button onClick={this.clickHandlerUnion}>
          Union
        </Button>
        <br/>
        <br/>
        <br/>
        {this.state.unionList}
      </div>
    )
  }

}

export default Movie
