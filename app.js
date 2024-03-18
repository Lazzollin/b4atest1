const express = require("express");
const path = require("path");
const Comments = require("./src/models/comments");
// const mongoose = require("mongoose");
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/mongotest", (req, res) => {
  const comments = Comments.find();

  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
