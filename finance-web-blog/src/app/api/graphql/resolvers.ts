const resolvers = {
  Query: {
    posts: async (
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
  },
};

export default resolvers;