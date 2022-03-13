const db = require("../db/dbConfig.js");


const getAllUsers = async () => {
  const users = await db.any("SELECT * FROM users");
  return users;
};

const getUser = async (id) => {
  try {
    return await db.oneOrNone("SELECT * FROM users where id = $1", id);
  } catch (error) {
    return { succes: false, message: error };
  }
};

const createUser = async (newUser) => {
  const { display_name, photo_url } = newUser;
  try {
    const user = await db.oneOrNone(
      "INSERT INTO users (display_name, photo_url) VALUES ($1, $2) RETURNING *",
      [display_name, photo_url]
    );
    return user;
    
  } catch (error) {
    return { succes: false, message: error }
  }
};

const deleteUser = async (id) => {
  const user = await db.oneOrNone("DELETE FROM users WHERE id = $1 RETURNING *", id);
  return user;
};
const editUser = async (id, user) => {
    const {display_name, photo_url} = user
  return db.oneOrNone(
    "UPDATE users SET display_name = $1, photo_url = $2 WHERE id = $3 RETURNING *",
    [display_name, photo_url, id]
  );
};


module.exports = { getAllUsers, getUser, createUser, deleteUser, editUser};
