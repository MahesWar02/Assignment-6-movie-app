import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="col-md-2 col-sm-4 p-3">
      <div className="card">
        <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
        <div className="card-body" style={{ backgroundColor: "#EC8305" }}>
          <p className="card-text text-white text-center">{movie.Title}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
