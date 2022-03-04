const express = require("express");
const movies = express.Router();

const { fetchAllMovies, getMovie, createMovie } = require("../queries/movies");


movies.get('/', async (req, res) => {
    const movies = await fetchAllMovies();
    res.json(movies)
})

movies.get('/:id', async (req, res) =>{
    const movie=  await getMovie(req.params.id)
    if(movie){
        res.json(movie)
    }else{
        res.json({success: false, error: true, message: 'invalid'})
    }
})

movies.post('/', async (req, res) => {
    const newMovie = req.body;
    const result = await createMovie(newMovie);
    res.json(result)
})

module.exports = movies;
