import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { apiURL } from "../util/apiURL";

const API = apiURL();
function MovieNewForm() {
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
  let genres = [
    "Action",
    "Anime",
    "Drama",
    "Award-Winning",
    "Romance",
    "International",
    "Horror",
  ];

  const createMovie = async (newMovie) => {
    try {
      await axios.post(`${API}/movies/film`, newMovie);
      history.push("/movies");
    } catch (error) {
      return error;
    }
  };

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMovie(movie);
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
          id='title'
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
         <button className="submit-item-form" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MovieNewForm;
