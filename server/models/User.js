const { Schema, model } = require("mongoose");
const showSchema = require("./Show");
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  shows: [showSchema],
});

const User = model("User", userSchema);
module.exports = User;
