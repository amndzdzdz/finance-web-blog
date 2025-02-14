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
  
  input NewPostInput {
    author_name: String!
    heading: String!
    domain: String!
    read_time: String!
    summary: String!
    content: String!
  }
  type Query {
    posts: [Post]
  }
  type Mutation {
    createPost(input: NewPostInput!): Post
  }
`;

export default typeDefs;