import React from 'react'; //Component를 사용시 항상 선언
import axios from 'axios';

class App extends React.Component{
  state = {
    isLoading:true,
    movies: []
  }
  getMovies = async() =>{
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");    
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    return (
  <div>{this.state.isLoading ? "Loading..." :"we are ready"}</div>
  )}
}

export default App;
