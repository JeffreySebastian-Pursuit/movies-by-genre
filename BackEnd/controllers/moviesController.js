const express = require("express");
const movies = express.Router();

const { fetchAllMovies } = require("../queries/movies");


movies.get('/', async (req, res) => {
    const movies = await fetchAllMovies();
    res.json(movies)
})



module.exports = movies;
