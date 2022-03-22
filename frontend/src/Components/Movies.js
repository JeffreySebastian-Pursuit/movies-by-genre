import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import ActionCard from "./ActionCard";
import AnimeCard from "./AnimeCard";
import AwardWinningCard from "./AwardWinningCard";
const API = apiURL();
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        let res = await axios.get(`${API}/movies/film`);
        // let genre = await axios.get(`${API}/movies/genre`);
        setMovies(res.data.payload);
        // setGenres(genre.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div>
      <ul>
        <h1>Action</h1>
        {movies
          .filter((movie, index) => movie.genre === "Action")

          .map((movie, index) => {
            return <ActionCard movie={movie} key={index}/>;
          })}
      </ul>

      <ul>
        <h1>Anime</h1>
        {movies
          .filter((movie, index) => movie.genre === "Anime")

          .map((movie, index) => {
            return <AnimeCard movie={movie} key={index}/>;
          })}
      </ul>


      <ul>
        <h1>Award-Winning</h1>
        {movies
          .filter((movie, index) => movie.genre === "Award-Winning")

          .map((movie, index) => {
            return <AwardWinningCard movie={movie} key={index} />;
          })}
      </ul>
    </div>
  );
};

export default Movies;
