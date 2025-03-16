// Post Model Creation
const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  name: { type: String },
  email: { type: String },
  website: { type: String },
  date: { type: String },
  comment: { type: String },
});

const blogSchema = new Schema({
  // Define blog fields here matching the GraphQL schema
  author: { type: String, required: [true, "All fields are required"] },

  thumbnailUrl: { type: String, required: [true, "All fields are required"] },

  title: {
    type: String,
    required: [true, "All fields are required"],
  },

  date: {
    type: String,
    required: [true, "All fields are required"],
  },

  domain: {
    type: String,
    required: [true, "All fields are required"],
  },

  time: {
    type: String,
    required: [true, "All fields are required"],
  },

  description: {
    type: String,
    required: [true, "All fields are required"],
  },

  content: {
    type: String,
    required: [true, "All fields are required"],
  },

  comments: {
    type: [commentSchema],
    required: [true, "All fields are required"],
    default: [],
  },
});

export default mongoose.models.BlogModel ||
  mongoose.model("BlogModel", blogSchema);
