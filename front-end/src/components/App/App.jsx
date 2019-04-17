import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';


// Include your new Components here
import Home from '../Home/Home.jsx';
import Example from '../Example/Example.jsx';
import Movie from '../Movie/Movie.jsx';
import Search from '../Search/Search.jsx';
import Profile from '../Profile/Profile.jsx';
import Details from '../Details/Details.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>

          {/*
            Add routes for new pages here!
            Here's an example. To view this route, just go to http://localhost:3000/example
          */}
          
          <Route exact path="/movie" component={Movie}/>
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/profile" component={Profile}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
