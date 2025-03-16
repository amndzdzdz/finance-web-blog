const resolvers = {
  Query: {
    getAllPosts: async (
      _: any,
      __: any,
      context: { dataSources: { posts: { getAllPosts: () => any } } }
    ) => {
      try {
        return await context.dataSources.posts.getAllPosts();
      } catch (error) {
        throw new Error("Failed to fetch posts");
      }
    },

    getDomainPosts: async (
      _: any,
      { domain, offset, limit }: any,
      context: {
        dataSources: {
          posts: {
            getDomainPosts: (domain: any, offset: any, limit: any) => any;
          };
        };
      }
    ) => {
      try {
        const posts = await context.dataSources.posts.getDomainPosts(
          domain,
          offset,
          limit
        );

        return posts;
      } catch (error) {
        throw new Error("Failed to fetch post");
      }
    },

    getRelatedPosts: async (
      _: any,
      { blogId }: any,
      context: {
        dataSources: {
          posts: {
            getRelatedPosts: (blogId: any) => any;
          };
        };
      }
    ) => {
      try {
        const posts = await context.dataSources.posts.getRelatedPosts(blogId);

        return posts;
      } catch (error) {
        throw new Error("Failed to fetch post");
      }
    },

    getMainPosts: async (
      _: any,
      { offset, limit }: any,
      context: {
        dataSources: {
          posts: { getMainPosts: (offset: any, limit: any) => any };
        };
      }
    ) => {
      try {
        return await context.dataSources.posts.getMainPosts(offset, limit);
      } catch (error) {
        throw new Error("Failed to fetch posts");
      }
    },

    getPost: async (
      _: any,
      { id }: any,
      context: { dataSources: { posts: { getPost(id: any): () => any } } }
    ) => {
      try {
        return await context.dataSources.posts.getPost(id);
      } catch (error) {
        throw new Error("Failed to fetch post");
      }
    },
  },

  Mutation: {
    createPost: async (_: any, { input }: any, context: any) => {
      try {
        const newPost = await context.dataSources.posts.createPost({
          input,
        });

        return newPost;
      } catch (error) {
        throw new Error("Failed to create post");
      }
    },

    updatePost: async (_: any, { input }: any, context: any) => {
      try {
        const updatedPost = await context.dataSources.posts.updatePost({
          input,
        });

        return updatedPost;
      } catch (error) {
        throw new Error("Failed to update post");
      }
    },

    deletePost: async (_: any, { input }: any, context: any) => {
      try {
        const deletedPost = await context.dataSources.posts.deletePost({
          input,
        });

        return deletedPost;
      } catch (error) {
        throw new Error("Failed to delete post", error.message);
      }
    },

    addComment: async (_: any, { input }: any, context: any) => {
      try {
        const comment = await context.dataSources.posts.addComment({
          input,
        });
        return comment;
      } catch (error) {
        throw new Error("Failed to delete post", error.message);
      }
    },
  },
};

export default resolvers;
