var React = require('react');
var axios = require('axios');

class Home extends React.Component {
    constructor(){
        super();
        this.state = { movies: []};
    }

    componentWillMount(){
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US";
        axios.get(url)
        .then((response)=>{
            this.setState({
                movies:response.data.results
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    componentDidMound(){

    }

    render() {
      return (
         <ul className="list-group">
          {this.state.movies.map(movie =>{
            return <li className="list-group-item"><a href="#"><span></span>{movie.original_title}</a></li>;
          })}
        </ul>
      )
    }
}


export { Home as default };
