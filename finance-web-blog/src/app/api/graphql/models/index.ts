// Post Model Creation
const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  // Define blog fields here matching the GraphQL schema
  author_name: { type: String, required: [true, "All fields are required"] },

  heading: {
    type: String,
    required: [true, "All fields are required"],
  },

  domain: {
    type: String,
    required: [true, "All fields are required"],
  },

  read_time: {
    type: String,
    required: [true, "All fields are required"],
  },

  summary: {
    type: String,
    required: [true, "All fields are required"],
  },

  content: {
    type: String,
    required: [true, "All fields are required"],
  },
  
});

export default mongoose.models.BlogModel || mongoose.model("BlogModel", blogSchema);

/*
mutation createPost($input: NewPostInput!) {
  createPost(input: $input) {
    id
    author_name
    heading
    domain
    read_time
    summary
    content
  }
} */