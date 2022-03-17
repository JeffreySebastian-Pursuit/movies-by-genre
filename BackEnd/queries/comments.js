const db = require("../db/dbConfig.js");


const getAllComments = async () => {
    return await db.any('SELECT users.display_name AS name, comments.comment, movies.genre, movies.thumbnail, movies.title, comments.dt AS time FROM users JOIN comments ON users.id = comments.user_id JOIN movies ON comments.movies_id = movies.id')
}

const getComment = async (id) => {
  return await db.any(
    "SELECT users.display_name AS name, comments.comment, movies.genre, movies.thumbnail, movies.title, comments.dt AS date FROM users JOIN comments ON users.id = comments.user_id JOIN movies ON comments.movies_id = movies.id WHERE users.id = $1",
id
  );
};

module.exports = { getAllComments, getComment };
