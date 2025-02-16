const typeDefs = `#graphql
  type Post {
    id: ID!
    author_name: String!
    heading: String!
    domain: String!
    read_time: String!
    summary: String!
    content: String!
}
    type ReducedPost {
        id: ID!
        author_name: String!
        heading: String!
        domain: String!
        read_time: String!
        summary: String!
    }
  
  input NewPostInput {
    author_name: String!
    heading: String!
    domain: String!
    read_time: String!
    summary: String!
    content: String!
  }

  input DeletePostInput {
    id: ID!
  }

  input UpdatePostInput {
    id: ID!
    author_name: String!
    heading: String!
    domain: String!
    read_time: String!
    summary: String!
    content: String!   
  }

  type Query {
    getAllPosts: [Post]
    getMainPosts: [ReducedPost]
  }
    
  type Mutation {
    createPost(input: NewPostInput!): Post
    updatePost(input: UpdatePostInput!): Post
    deletePost(input: DeletePostInput!): Post
  }
`;

export default typeDefs;
