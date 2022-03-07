const express = require("express");
const moviesGenre = express.Router();

const { getMovieByGenre, getAllGenre } = require("../queries/movies");


moviesGenre.get('/', async (req, res) => {
    const genres = await getAllGenre();
    res.json(genres)
})

moviesGenre.get('/:genre', async (req, res) =>{
    
    const movie=  await getMovieByGenre(req.params.genre)
    if(movie){
        res.json(movie)
    }else{
        res.json({success: false, error: true, message: 'invalid'}).redirect(302)
    }
})


module.exports = moviesGenre