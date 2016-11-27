import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import App from './app.js'
import Home from './home.js';
import Movie from './movie.js';

// const NotFound = React.createClass({
//   render() {
//     return <h2>Not found Today</h2>
//   }
// })

render((
  <Router history={browserHistory}>
    <Route path={"/"} component={App}>
    <IndexRoute component={Home}/>
       <Route path="home" component={Home}/>
       <Route path="movie/:id" component={Movie}/>
    </Route>
    
  </Router>
), document.getElementById('root'))

