// import { useState } from "react";

const MovieCollections = ({ movies, genre, loading }) => {
  
  function firstLetter(genre){
    return genre.charAt(0).toUpperCase() + genre.substring(1);
  }
  return (
    <>
      <h1>{firstLetter(genre)}</h1>
      {!loading && (
        <ul>
          {movies.map((movie, index) => {
            return (
              <li key={index}>
                <h3>{movie.title}</h3>
                <video className="video" controls autoPlay={false} loop>
                  <source src={movie.thumbnail} type="video/mp4" />
                </video>
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
