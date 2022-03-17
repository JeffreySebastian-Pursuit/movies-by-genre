const express = require("express");
const comments = express.Router();

const { getComment, getAllComments } = require("../queries/comments");

comments.get("/", async (req, res) => {
  return res.json(await getAllComments());
});

comments.get("/:id", async (req, res) => {
  const comment = await getComment(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

module.exports = comments;
