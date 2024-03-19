const { Schema, model } = require("mongoose");

const comments = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Comments = model("comments", comments, "sample_mflix");

module.exports = Comments;
