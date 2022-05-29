const { Schema, model } = require("mongoose");

const showSchema = new Schema({
  showId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageSrc: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = showSchema;
