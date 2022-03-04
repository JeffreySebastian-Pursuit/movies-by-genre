const db = require("../db/dbConfig.js");

const fetchAllMovies = async () => {
  try {
    const movies = await db.any("SELECT * FROM movies_genre");
    return { success: true, payload: movies };
  } catch (error) {
    console.log(error);
    return { success: false, payload: error };
  }
};

const getMovie = async (id) => {
  return await db.oneOrNone("SELECT * FROM movies_genre WHERE id=$1", id);
};

const createMovie = async (newMovie) => {
  const { genre, title, thumbnail, year, synopsis, duration, favorite } =
    newMovie;
  try {
    const movie = await db.one(
      "INSERT INTO movies_genre (genre, title, thumbnail, year, synopsis, duration, favorite) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [genre, title, thumbnail, year, synopsis, duration, favorite]
    );
    return {success: true, payload: movie}
  } catch (error) {
    console.log(error);
    return {success: false, payload: error}
  }
};

module.exports = { fetchAllMovies, getMovie , createMovie};
