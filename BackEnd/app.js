const cors = require("cors");
const express = require("express");
const app = express();
const moviesController = require("./controllers/moviesController");

app.use(cors());
app.use(express.json());

app.use("/movies", moviesController);
app.get("/", (req, res) => {
  res.send("Welcome and rate your favorite movies");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});  

module.exports = app;