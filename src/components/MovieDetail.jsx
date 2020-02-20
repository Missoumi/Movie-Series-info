import React, { useState } from "react";
import axios from "axios";

const MovieDetail = ({ match }) => {
  const [movie, setmovie] = useState({ movie: {} });
  const { id } = match.params;
  axios
    .get("http://www.omdbapi.com/?i=" + id + "&apikey=9be27fce")
    .then(res => {
      setmovie(res.data);
    });

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img className="img-thumbnail" src={movie.Poster} alt={movie.title} />
      </div>
      <div className="col-8">
        <h2 className="font-weight-bold mb-3">{movie.Title}</h2>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">Genre</span> : {movie.Genre}
          </h6>
        </div>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">Released</span> :{" "}
            {movie.Released}
          </h6>
        </div>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">Rated</span> : {movie.Rated}
          </h6>
        </div>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">IMDB Rating</span> :{" "}
            {movie.imdbRating}
          </h6>
        </div>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">Director</span> :{" "}
            {movie.Director}
          </h6>
        </div>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">Writer</span> : {movie.Writer}
          </h6>
        </div>
        <div
          className="p-2 py-3"
          style={{ border: "solid 1px rgb(212, 212, 212)" }}
        >
          <h6>
            <span className="font-weight-bolder">Actors</span> : {movie.Actors}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
