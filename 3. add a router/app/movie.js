import React from 'react'
import {browserHistory,Link} from 'react-router';
var axios = require('axios');

class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = { movieInfo: new Object()};
    }

    componentDidMount(){
        var val = this.props.params.id;
        var apiKey = '1cec0394fa447a1f03d7a744faf9cbc9';
        var url = 'https://api.themoviedb.org/3/movie/' + val + '?api_key=' + apiKey;

        axios.get(url)
        .then((response)=>{
            console.log(response.data)
            this.setState({
                movieInfo:response.data
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }
    render(){
        return(
            <div>
              <Link to={'/'}>HOME</Link>
                <div className="jumbotron">
                    <div className="container">
                        <img src={`https://image.tmdb.org/t/p/w500_and_h281_bestv2${this.state.movieInfo.backdrop_path}`}/>
                    </div>
                </div>
                <div className="page-header">
                    <h1>{this.state.movieInfo.original_title}</h1>
                    <small>{this.state.movieInfo.overview}</small>
                </div>
            </div>
        )
    }
}

export { Movie as default };
