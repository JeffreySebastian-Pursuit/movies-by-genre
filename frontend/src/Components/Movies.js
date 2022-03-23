import axios from "axios";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";
import MovieCollections from "./MovieCollections";

const API = apiURL();


const Movies = () => {
  const [movies, setMovies] = useState({});
  // const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        let res = await axios.get(`${API}/movies/film`);
        // let genre = await axios.get(`${API}/movies/genre`);
        let obj = {};
        for (let movie of res.data.payload) {
          if (!(movie.genre in obj)) {
            obj[movie.genre] = [];
          }
          obj[movie.genre].push(movie);
        }
        setMovies(obj);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllMovies();
  }, []);

  return (
    <div>
      {!loading &&
        Object.keys(movies)?.map((key) => {
          return <MovieCollections genre={key} movies={movies[key]} loading={loading} />;
        })}
      {loading && <MovieCollections loading={true} />}{" "}
    </div>
  );
};

export default Movies;
