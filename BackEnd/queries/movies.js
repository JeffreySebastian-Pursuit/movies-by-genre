const db = require("../db/dbConfig.js");

const fetchAllMovies = async() => {
    try {
        const movies = await db.any('SELECT * FROM movies_genre');
        return {success: true, payload: movies}
    } catch (error) {
        console.log(error)
        return {success: false, payload: error}
    }
}


module.exports =  {fetchAllMovies}