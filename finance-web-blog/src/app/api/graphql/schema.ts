const typeDefs = `#graphql
  type Post {
    id: String!
    author: String!
    thumbnailUrl: String!
    title: String!
    domain: String!
    time: String!
    description: String!
    content: String!
}
    type ReducedPost {
        id: String!
        author: String!
        thumbnailUrl: String!
        title: String!
        domain: String!
        time: String!
        description: String!
    }
  
  input NewPostInput {
    author: String!
    thumbnailUrl: String!
    title: String!
    domain: String!
    time: String!
    description: String!
    content: String!
  }

  input DeletePostInput {
    id: String!
  }

  input UpdatePostInput {
    id: ID!
    author: String!
    thumbnailUrl: String!
    title: String!
    domain: String!
    time: String!
    description: String!
    content: String!   
  }

  type Query {
    getAllPosts: [Post]
    getMainPosts: [ReducedPost]
    getPost(id: String!): Post
  }
    
  type Mutation {
    createPost(input: NewPostInput!): Post
    updatePost(input: UpdatePostInput!): Post
    deletePost(input: DeletePostInput!): Post
  }
`;

export default typeDefs;
