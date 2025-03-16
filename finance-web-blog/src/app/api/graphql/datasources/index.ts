import BlogModel from "../models";
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongoose";
import mongoose from "mongoose";

interface blogDocument {
  _id: ObjectId;
  author: String;
  thumbnailUrl: String;
  title: String;
  domain: String;
  time: String;
  description: String;
  content: String;
}

export default class Posts extends MongoDataSource<blogDocument> {
  // Function to fetch all posts
  async getAllPosts() {
    try {
      return await BlogModel.find().sort({ _id: -1 });
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }

  async getMainPosts(offset: number, limit: number) {
    try {
      return await BlogModel.find().sort({ _id: -1 }).skip(offset).limit(limit);
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }

  async getRelatedPosts(blogId: any) {
    try {
      // Convert blogId to an ObjectId if it's provided as a string
      const blogObjectId = new mongoose.Types.ObjectId(blogId);

      const relatedPosts = await BlogModel.aggregate([
        { $match: { _id: { $ne: blogObjectId } } },
        { $sample: { size: 3 } },
        { $project: { id: { $toString: "$_id" }, thumbnailUrl: 1, title: 1 } },
      ]);

      return relatedPosts;
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
  }

  async getDomainPosts(domain: any, offset: any, limit: any) {
    try {
      let posts = await BlogModel.find({ domain: domain }, [
        "id",
        "thumbnailUrl",
        "title",
        "domain",
        "description",
      ])
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit);
      return posts;
    } catch (error) {
      throw new Error("Failed to find post by id");
    }
  }

  async getPost(id: any) {
    try {
      const post = await BlogModel.findById(id);

      return post;
    } catch (error) {
      throw new Error("Failed to find post by id");
    }
  }

  async updatePost({ input }: any) {
    try {
      const { id, ...updatedValues } = input;
      const updatedPost = await BlogModel.findByIdAndUpdate(id, updatedValues, {
        new: true,
      });

      if (!updatedPost) {
        throw new Error("The post was not found.");
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
      throw new Error("Failed to delete posts");
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

  async addComment({ input }: any) {
    try {
      const { id, ...updatedValues } = input;
      const post = await BlogModel.findById(id);
      const comments = post.comments;
      var updatedPost = null;

      if (comments.length === 0) {
        updatedPost = await BlogModel.findByIdAndUpdate(
          id,
          { comments: updatedValues },
          {
            new: true,
          }
        );
      } else {
        const newComments = { comments: comments.concat(updatedValues) };
        updatedPost = await BlogModel.findByIdAndUpdate(id, newComments, {
          new: true,
        });
      }
      return updatedPost;
    } catch (error) {
      throw new Error("Failed to create posts");
    }
  }
}
