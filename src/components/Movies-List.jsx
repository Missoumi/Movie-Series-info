import React, { Component } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import CustomSkeleton from "./CustomSkeleton";

class MoviesList extends Component {
  state = {
    movies: [],
    skeleton: false
  };
  get_movies = title => {
    this.setState({
      skeleton: true
    });
    axios
      .get("http://www.omdbapi.com/?s=" + title + "&apikey=9be27fce")
      .then(res => {
        const movies = res.data.Search;
        this.setState({
          movies,
          skeleton: false
        });
      });
  };
  render() {
    const list_movies = this.state.movies ? (
      this.state.skeleton ? (
        <>
          <CustomSkeleton />
          <CustomSkeleton />
          <CustomSkeleton />
          <CustomSkeleton />
        </>
      ) : (
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
      )
    ) : (
      <h2>No movies or series found</h2>
    );
    return <div className="row mt-5">{list_movies}</div>;
  }
}

export default MoviesList;
