import React from "react";

function Movie(props) {
  return (
    <li className="list-item">
      <div className="movie-container">
        <h3>{props.movie.title}</h3>
        <span className="movie-date">{props.movie.release_date}</span>
      </div>
    </li>
  );
}

export default Movie;
