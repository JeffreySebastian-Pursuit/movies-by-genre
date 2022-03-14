const db = require("../db/dbConfig.js");
const capitalChar = require('../helperFuntions/validateChar')

const fetchAllMovies = async () => {
  try {
    const movies = await db.any("SELECT * FROM movies");
    return { success: true, payload: movies };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getMovie = async (id) => {
  return await db.oneOrNone("SELECT * FROM movies WHERE id=$1", id);
};

const getAllGenre = async () => {
  return await db.any("SELECT DISTINCT genre FROM movies");
};

const getMovieByGenre = async (genre) => {
  try {
    let capitalize = capitalChar(genre)
    let movieByGenre = await db.any("SELECT * FROM movies WHERE genre=$1", capitalize);
    return { success: true, payload: movieByGenre };
  } catch (error) {
    console.log(error)
    return { success: false, payload: error };
  }
};

const createMovie = async (newMovie) => {
  const { genre, title, thumbnail, year, synopsis, duration, favorite } =
    newMovie;
  try {
    const movie = await db.one(
      "INSERT INTO movies(genre, title, thumbnail, year, synopsis, duration, favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [genre, title, thumbnail, year, synopsis, duration, favorite]
    );
    return { success: true, payload: movie };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const updateMovie = async (id, info) => {
  const {genre, title, thumbnail, year, synopsis, duration, favorite} = info;
  return db.oneOrNone('UPDATE movies SET genre =$1, title = $2, thumbnail=$3, year=$4, synopsis=$5, duration=$6, favorite=$7 WHERE id = $8 RETURNING *',
  [genre, title, thumbnail, year, synopsis, duration, favorite, id])

}
const deleteMovie = async (id) => {
  return await db.oneOrNone('DELETE FROM movies WHERE id=$1 RETURNING *', id)
}

module.exports = {
  fetchAllMovies,
  getMovie,
  createMovie,
  getMovieByGenre,
  getAllGenre,
  updateMovie,
  deleteMovie
};
