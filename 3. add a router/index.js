import React         from 'react';
import { render }     from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import Home          from './app/home.js';
import Movie          from './app/movie.js';

class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Router path={"/"} component={Home}/>
                <Router path={"movie"} component={Movie}/>
            </Router>
        )
    }
}

render(<App />,document.getElementById('app'))

