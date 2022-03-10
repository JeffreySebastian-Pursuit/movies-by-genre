const express = require("express");
const moviesGenre = express.Router();

const { getMovieByGenre, getAllGenre } = require("../queries/movies");


moviesGenre.get('/', async (req, res) => {
    const genres = await getAllGenre();
    res.json(genres)
})

moviesGenre.get('/:genre', async (req, res) =>{
    // check if theres a specific genre on what the users want
    // if there is show that genre that requested by the user
    // if not send a message that no genre available
    let genres = ['Action', 'Anime', "Drama"];
    if(genres.includes(req.params.genre)){
        try {
            const movie=  await getMovieByGenre(req.params.genre)
            res.json(movie)
            
        } catch (error) {
            res.json({success: false, error: true, message: 'database request invalid'}).redirect(302)
            
        }
        // if(movie.payload.length){
        // }else{
        // }

    }else{
        res.json({success: false, message: "No genre available"})
    }
    // console.log(typeof movie)
})


module.exports = moviesGenre