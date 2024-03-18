const express = require("express");
const path = require("path");
const Comments = require("./src/models/comments");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json({ limit: "50mb" }));

mongoose.connect(process.env.MONGO_URL);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/mongotest", async (req, res) => {
  const comments = await Comments.find({});
  console.log(comments);
  res.send(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
