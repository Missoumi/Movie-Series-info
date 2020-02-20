import React from "react";

const MovieCard = ({title, poster, year, imdbID}) => {
  return (
    <div
      className="p-3 text-center rounded"
      style={{ backgroundColor: "rgb(51, 51, 51)" }}
    >
      <img
        className="img-fluid"
        src={poster}
        alt="title"
      />
      <h5 className='my-3' style={{color:'white'}}>{title} -{year}</h5>
      <a href={imdbID} className='btn btn-primary btn-block'>More Details ></a>
    </div>
  );
};

export default MovieCard;
