import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";


class MoviesList extends Component {
  state = {
    movies: []
  };
  get_movies = title => {
    axios
      .get("http://www.omdbapi.com/?s=" + title + "&apikey=9be27fce")
      .then(res => {
        const movies = res.data.Search;
        this.setState({
          movies
        });
      });
  };
  render() {
    const list_movies = this.state.movies ? (
      this.state.movies.map(movie => {
        return (
          <div className="col-3 p-1">
            <MovieCard
              title={movie.Title}
              poster={movie.Poster}
              year={movie.Year}
              imdbID={movie.imdbID}
            />
          </div>
        );
      })
    ) : (
      <h2>No movies or series found</h2>
    );
    return <div className="row mt-5">{list_movies}</div>;
  }
}

export default MoviesList;
