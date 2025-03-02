// Post Model Creation
const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  // Define blog fields here matching the GraphQL schema
  author: { type: String, required: [true, "All fields are required"] },

  thumbnailUrl: { type: String, required: [true, "All fields are required"] },

  title: {
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
});

export default mongoose.models.BlogModel ||
  mongoose.model("BlogModel", blogSchema);
