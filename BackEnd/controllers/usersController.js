const express = require("express");
const users = express.Router();
const {getAllUsers, getUser, createUser, deleteUser } = require("../queries/users");

users.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

users.get('/:id', async(req, res) => {
    // const { id } = req.params;
    try {
      const user = await getUser(req.params.id);
      if (user) {
        res.json({ success: true, payload: user });
      } else {
        res.status(404).json({ success: false, payload: "not found" });
      }
    } catch (error) {
      console.log(error);
    }
})


module.exports = users;
