import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import MovieCollections from "./MovieCollections";

const API = apiURL();

const Movies = () => {
  const [movies, setMovies] = useState({});
  const [searchByGenre, setsearchByGenre] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        let res = await axios.get(`${API}/movies/film`);
        let obj = {};
        for (let movie of res.data.payload) {
          if (!(movie.genre in obj)) {
            obj[movie.genre] = [];
          }
          obj[movie.genre].push(movie);
        }
        setMovies(obj);
        setLoading(false);
        // setGenres(genre.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div>
      <div className="searchBar">
        <input
          className="searchBar__input"
          placeholder="Search by genre"
          value={searchByGenre}
          onChange={(event) => setsearchByGenre(event.target.value)}
        />
      </div>
      {!loading &&
        Object.keys(movies)
          ?.filter((genre, index) => {
            if (searchByGenre === "") {
              return genre;
            } else if (
              genre?.toLowerCase().includes(searchByGenre?.toLowerCase())
            ) {
              return genre;
            }
          })
          .map((key) => {
            return (
              <MovieCollections
                genre={key}
                movies={movies[key]}
                loading={loading}
              />
            );
          })}
      {loading && <MovieCollections loading={true} />}{" "}
    </div>
  );
};

export default Movies;
