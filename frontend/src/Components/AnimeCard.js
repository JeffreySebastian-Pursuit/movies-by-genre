import { useState } from "react";

const AnimeCard = ({ movie }) => {
  return (
    <>
   
      <div>
        <p>{movie.title}</p>
      </div>
      <video className="video" controls autoPlay={false} loop>
        <source src={movie.thumbnail} type="video/mp4" />
      </video>
    </>
  );
};

export default AnimeCard;