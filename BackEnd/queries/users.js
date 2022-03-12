const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  const users = await db.any("SELECT * FROM users");
  return users;
};

const getUser = async (id) => {
    try {
       return  await db.oneOrNone("SELECT * FROM users where id = $1", id);
        // return user;
    } catch (error) {
        return {succes: false, message: error}
    }
};

const createUser = async (newUser) => {
  const { display_name, photo_url } = newUser;
  const user = await db.one(
    "INSERT INTO user(display_name, photo_url) VALUES ($1, $2) RETURNING *",
    [display_name, photo_url]
  );
  return user;
};

const deleteUser = async (id) =>{
    const user = await db.one("DELETE FROM users where id = $1", id);
    return user;
}
module.exports = { getAllUsers, getUser, createUser, deleteUser };
