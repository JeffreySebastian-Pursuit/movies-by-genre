const cors = require("cors");
const express = require("express");
const app = express();
const moviesController = require("./controllers/moviesController");
const genreController = require("./controllers/genreController");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome and rate your favorite movies");
});
app.use("/movies/film", moviesController);
app.use("/movies/genre", genreController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});  

module.exports = app;