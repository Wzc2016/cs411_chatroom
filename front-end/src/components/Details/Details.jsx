import React, { Component } from 'react';
import { Form, FormInput,Button, Item, Image, Header, Grid, Input} from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from './Details.scss';
import NavBar from '../NavBar.jsx';
import hp from './hp.jpg';

//import history from '../history.js';
import './Details.scss';
class Details extends Component{
  constructor(){
    super();
    this.state = {
      reviews:[],
      movie: {},
      user: '',
      value: ''
    };

  }

  componentDidMount(){
    var mid = this.props.match.params.movieId;
    axios.get("http://localhost:8000/search/movieId/" + this.props.match.params.movieId)
      .then((response) => {
        //-----------TODO: change the id to this.props.match.params.movieId-----------
        //-----------ADD AFTER THE POST FINISHED-----------
        this.setState({movie: response.data[0]});
        return axios.get("http://localhost:8000/reviews/" + mid);
      })
      .then((response) => {
        console.log(response.data);
        this.setState({reviews: response.data});
        //return axios.get("http://localhost:8000/reviews/" + this.props.match.params.movieId)
      }).catch((err) => {
        console.log(err)
      })

  }
  searchHandler(event) {
		// console.log("state search", event.target.value);
		this.setState({value: event.target.value});
	}

  likeHandler(event) {

  }

  dislikeHandler(event) {

  }

  handleReviewPost(event){
    // console.log("input: ", this.state.value);
    var postreview = {Content: this.state.value, MovieId: this.props.match.params.movieId, Num_likes:0, Num_dislikes:0};
    axios.post("http://localhost:8000/reviews/",postreview)
    .then((response) => {
      // console.log(response.data);
      this.componentDidMount();
    });
  }

  handleMovieList(event) {
    var info = {movie_id: this.props.match.params.movieId, uid: window.sessionStorage.getItem('userId')};
    axios.put('http://localhost:8000/users', info);
  }

  render(){

    return(
      <div>
      <NavBar/>
        <div class ="row">
            <div class = "column">
              <p>{this.state.movie['original_title']}</p>
              <img src = {hp} alt={"logo"}/>
            </div>
            <div class = "column">

            <Input placeholder='New Review' fluid value={this.state.value} onChange={this.searchHandler.bind(this)}/>
             <button onClick={ () => this.handleReviewPost()}>
                 ADD A REVIEW HERE!
             </button>
             <br/>
             <br/>
             <br/>
             <button onClick={ () => this.handleMovieList()}>
                 ADD THE MOVIE TO WISHLIST!
             </button>

            </div>
        </div>
        <div className="lowerPanel">
          <p>Reviews</p>
          <MovieGridList reviews={this.state.reviews}/>
        </div>

      </div>


    );

  }


}
export default Details;

function MovieGridList(props) {
    // console.log("movie grid list", props);
	return(
		<ul className='popular-list-list'>
		{
			(props.reviews).map(function(review){
            // console.log(review);

		        	var reviewId = review.id;
		        // var index = getIndex(url);

						// moviePoster = <img className='picture-gallery' src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ index + ".png"} onClick={()=>history.push("/detail/"+index)}/>;
				return(
					<div key={reviewId} className='card'>
						<Grid>
						<Grid.Column>
                    				<p className='popular-item-list'>
                    					{review.Content}
                    				</p>

						</Grid.Column>

						</Grid>
					</div>
				);
        		})
		}
		</ul>
	)

}
