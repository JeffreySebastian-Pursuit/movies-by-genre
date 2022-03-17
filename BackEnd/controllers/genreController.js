const express = require("express");
const moviesGenre = express.Router();

const { getMovieByGenre, getAllGenre } = require("../queries/movies");

moviesGenre.get("/", async (req, res) => {
  const genres = await getAllGenre();
  res.json(genres);
});

moviesGenre.get("/:genre", async (req, res) => {
  // check if theres a specific genre on what the users want
  // if there is show that genre that requested by the user
  // if not send a message that no genre available
  let genres = [
    "Action",
    "Anime",
    "Drama",
    "Award-Winning",
    "Romance",
    "International",
    'Horror'
  ];
  genres = genres.map((el) => el.toLocaleUpperCase());
  const movie = await getMovieByGenre(req.params.genre);
  if (movie.payload.length) {
    res.json(movie);
  } else if (genres.includes(req.params.genre.toLocaleUpperCase())) {
    res.json({ success: true, message: "Genre doesnt exist in the database" });
  } else {
    res.json({ success: false, message: "Invalid database requests" });
  }
});

module.exports = moviesGenre;
