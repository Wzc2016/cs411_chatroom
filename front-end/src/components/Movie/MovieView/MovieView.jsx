import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Label } from 'semantic-ui-react'

import './MovieView.scss'

class MovieView extends Component {
  render() {
    // Check if the object is empty
    const noMovie = Object.entries(this.props.movie).length === 0
      && this.props.movie.constructor === Object;

    if (noMovie) {
      return (
        <Card className="MovieViewCss">
          <h3>No Movie yet!</h3>
        </Card>
      )
    } else {
      // Iterate over the Movie's abilities and generate a label for each.
      const abilitiesView = this.props.movie.abilities.map((ability, idx) => {
        return (
          // Using `idx` as a key is generally discouraged:
          // https://reactjs.org/docs/lists-and-keys.html#keys
          <Label key={idx}>
            {ability.ability.name}
          </Label>
        )
      });

      // Display some data about the Movie, and its abilities.
      return (
        <Card className="MovieViewCss">
          <Card.Content>
            <Card.Header className="MovieViewHeader">
              {this.props.movie.Movie}
            </Card.Header>
           {/* <Card.Meta>
              Pokedex #{this.props.movie.id}
            </Card.Meta>
            <img
              src={this.props.movie.sprites.front_default}
              alt={`Sprite of ${this.props.movie.name}`}
            />*/}
            <h4>Abilities</h4>
            {/*{abilitiesView}*/}
          </Card.Content>
        </Card>
      )
    }
  }
}

MovieView.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    abilities: PropTypes.arrayOf(PropTypes.shape({
      ability: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      })
    })),
    sprites: PropTypes.object,
  }),
}

export default MovieView
