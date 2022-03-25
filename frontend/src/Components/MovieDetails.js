import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL";
import axios from "axios";
import { useState, useEffect } from "react";

function MovieDetails() {
  const API = apiURL();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchAllMovie = async () => {
      try {
        let res = await axios.get(`${API}/movies/film/${id}`);
        setMovies(res?.data);
        setLoading(false);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMovie();
  },[id]);

  const { genre, title, thumbnail, year, synopsis, duration, favorite } =
    movies;
  return (
    <div>
      {!loading && (
        <>
          <h1>{title}</h1>
          <video className="video" controls="controls" preload="metadata">
            <source src={thumbnail} type="video/mp4" />
          </video>
          <h3>Synopsis: {synopsis}</h3>
          <p>Genre: {genre}</p>
          <p>Duration{duration}</p>
          <p>Year: {year}</p>
          <p>Likes: {favorite}</p>
        </>
      )}
       {loading && <div>LOADING.... </div>}
    </div>
  );
}

export default MovieDetails;
