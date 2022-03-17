const express = require("express");
const movies = express.Router();

const {
  fetchAllMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} = require("../queries/movies");

movies.get("/", async (req, res) => {
  const movies = await fetchAllMovies();
  res.json(movies);
});

movies.get("/:id", async (req, res) => {
  const movie = await getMovie(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ success: false, error: true, message: "invalid" });
  }
});
movies.post("/", async (req, res) => {
  const newMovie = req.body;
  const result = await createMovie(newMovie);
  res.json(result);
});

movies.put("/:id", async (req, res) => {
  const { id } = req.params;
  const movie = req.body;
  const editMovie = await updateMovie(id, movie);
  editMovie
    ? res.json(editMovie)
    : res
        .status(422)
        .json({ success: false, error: true, message: "invalid id" });
});

movies.delete("/:id", async (req, res) => {
  const movie = await deleteMovie(req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res
      .status(404)
      .json({ success: false, error: true, message: "invalid id" });
  }
});
module.exports = movies;
