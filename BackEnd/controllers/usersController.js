const express = require("express");
const users = express.Router();
const {getAllUsers, getUser, createUser, deleteUser, editUser } = require("../queries/users");

users.get("/", async (req, res) => {
  const users = await getAllUsers();
  res.json(users);
});

users.get('/:id', async(req, res) => {
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

users.post('/', async(req, res) => {
    const user = await createUser(req.body);
    res.json({success: true, payload: user})
    
})


users.delete('/:id', async (req, res) => {
  const user = await deleteUser(req.params.id);
  if(user){
    res.json(user)
  }else{
    res.status(404).json({success: false, error: true, message: "invalid id"})
  }
})

users.put('/:id', async(req, res) =>{
    const { id } = req.params;
    const user = req.body;
    const updateUser = await editUser(id, user);
    updateUser ? res.json(updateUser) : res.status(422).json({success: false, error: true, message: "invalid id"})
})

module.exports = users;
