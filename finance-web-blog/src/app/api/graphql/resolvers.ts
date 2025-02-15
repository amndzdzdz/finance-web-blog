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

    getMainPosts: async (
      _: any,
      __: any,
      context: { dataSources: { posts: { getMainPosts: () => any } } }
    ) => {
      try {
        return await context.dataSources.posts.getMainPosts();
      } catch (error) {
        throw new Error("Failed to fetch posts");
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
        const updatedPost = await context.dataSources.posts.getSpecificPost({
          input,
        });
        return updatedPost;
      } catch (error) {
        throw new Error("Failed to create post");
      }
    },
  },
};

export default resolvers;