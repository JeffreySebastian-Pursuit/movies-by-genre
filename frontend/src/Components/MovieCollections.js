// import { useState } from "react";

import { Link } from "react-router-dom";

const MovieCollections = ({ movies, genre, loading }) => {

  function upperCaseFirst(genre) {
    return genre?.charAt(0).toUpperCase() + genre?.substring(1).toLowerCase();
  }
  return (
    <>
      <h1>{upperCaseFirst(genre)}</h1>
      {!loading && (
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}>
                <h3>{movie.title}</h3>
                <Link to={`/movies/${movie.id}`}>
                  <video
                    className="video"
                    controls="controls"
                    preload="metadata"
                  >
                    <source src={movie.thumbnail} type="video/mp4" />
                  </video>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      {loading && <div>LOADING.... </div>}
    </>
  );
};

export default MovieCollections;
