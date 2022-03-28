import React from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function MovieEditForm() {
  const [movie, setMovie] = useState({
    genre: "",
    title: "",
    thumbnail: "",
    year: new Date().getFullYear(),
    synopsis: "",
    duration: Number(""),
    favorite: 0,
  });

  const history = useHistory();
  const { id } = useParams();
  let genres = [
    "Action",
    "Anime",
    "Drama",
    "Award-Winning",
    "Romance",
    "International",
    "Horror",
  ];

  const createMovie = async (updateMovie) => {
    try {
      await axios.put(`${API}/movies/film`, updateMovie);
      history.push("/movies");
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let res = await axios.get(`${API}/movies/film/${id}`);
        setMovie(res?.data);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [id]);

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie, id);
  };

  const { title, thumbnail, year, synopsis, duration, favorite } = movie;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          onChange={handleChange}
          defaultValue="Select Genre"
          required
        >
          <option disabled>Select Genre</option>
          {genres.map((genre) => {
            return (
              <option key={genre} value={genre}>
                {genre}
              </option>
            );
          })}
        </select>
        <label htmlFor="title" className="text-secondary">
          Title:
        </label>
        <input
          value={title}
          type="text"
          id="title"
          onChange={handleChange}
          placeholder="Enter a title..."
          required
        />
        <label htmlFor="thumbnail" className="text-secondary">
          Thumbnail:
        </label>
        <input
          value={thumbnail}
          type="text"
          onChange={handleChange}
          id="thumbnail"
          placeholder="Enter a thumbnail..."
          required
        />

        <label htmlFor="synopsis" className="text-secondary">
          Synopsis:
        </label>
        <textarea
          value={synopsis}
          type="text"
          onChange={handleChange}
          id="synopsis"
          placeholder="Enter a synopsis..."
          required
        ></textarea>

        <label htmlFor="year" className="text-secondary">
          Year:
        </label>
        <input
          value={year}
          type="year"
          onChange={handleChange}
          id="year"
          placeholder="Enter a year..."
          required
        />
        <label htmlFor="duration" className="text-secondary">
          Duration:
        </label>
        <input
          value={duration}
          type=""
          onChange={handleChange}
          id="duration"
          placeholder="Enter a duration..."
          required
        />
        {/* <label htmlFor="favorite" className="text-secondary">
          Favorite:
        </label>
        <input
          value={favorite}
          type=""
          onChange={handleChange}
          id="brand"
          placeholder=""
          required
        /> */}
        <button className="submit-item-form" type="submit">
          Submit
        </button>
        <Link to={`/movies/${id}`}>
          <button>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default MovieEditForm;
