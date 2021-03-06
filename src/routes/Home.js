import React from 'react'; //Component를 사용시 항상 선언
import axios from 'axios';
import Movie from '../component/Movie';
import "./Home.css";
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async() => {
    const {
      data:
      {data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);
    this.setState({ movies: movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
        ?
        (<div className="loader">
          <span className="loader__text">Loading...</span>
    </div>)
      :(
      <div className="movies">
        {movies.map(movie =>(
          <Movie 
          key={movie.id} 
          id={movie.id} 
          title={movie.title}
          genres={movie.genres} 
          year={movie.year} 
          summary={movie.summary}
          poster={movie.medium_cover_image}/>
        ))}
      </div>
    )}</section>
    )
  }
}

export default Home;
