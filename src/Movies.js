import React from "react";
import Movie from "./Movie";

export function Movies(props) {
  return (
    <ul>
      {props.movies.map(movie => {
        return <Movie movie={movie} key={movie.id} />;
      })}
    </ul>
  );
}
