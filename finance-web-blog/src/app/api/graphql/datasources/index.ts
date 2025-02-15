import BlogModel from "../models"
import { MongoDataSource } from "apollo-datasource-mongodb"
import { ObjectId } from "mongoose"

interface blogDocument {
    _id: ObjectId;
    author_name: String;
    heading: String;
    domain: String;
    read_time: String;
    summary: String;
    content: String;
}

export default class Posts extends MongoDataSource<blogDocument> {
    // Function to fetch all posts
    async getAllPosts() {
      try {
        return await BlogModel.find();
      } catch (error) {
        throw new Error("Failed to fetch posts");
      }
    }

    async getMainPosts() {
      try {
        return await BlogModel.find();
      } catch (error) {
        throw new Error("Failed to fetch posts");
      }
    }
  
    async updatePost({ input }: any) {
      try {
        const {id, ...updatedValues} = input;
        const updatedPost = await BlogModel.findByIdAndUpdate(id, updatedValues, { new: true});

        if (!updatedPost) {
          throw new Error("The post was not found.")        
        }

        return updatedPost;

      } catch (error) {
        throw new Error("Failed to update post");
      }
    }

    async deletePost({ input }: any) {
      try {
        const { id } = input;
        const deletedPost = BlogModel.findByIdAndDelete(id);

        return deletedPost;

      } catch (error) {
        throw new Error("Failed to create posts");
      }
    }

    // Function to create a new blog entry
    async createPost({ input }: any) {
      try {
        return await BlogModel.create({ ...input });
      } catch (error) {
        throw new Error("Failed to create posts");
      }
    }
  }