const mongoose = require("mongoose");

const Answer = mongoose.model("Answer", {
  name: String,
  last_name: String,
  email: String,
  number: Number,
});

module.exports = Answer;
