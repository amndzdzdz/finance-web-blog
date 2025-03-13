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

  type DomainPost {
    id: String!
    author: String!
    thumbnailUrl: String!
    title: String!
    domain: String!
    time: String!
    description: String!
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
    getMainPosts(offset: Int, limit: Int): [ReducedPost]
    getPost(id: String!): Post
    getDomainPosts(domain: String!, offset: Int, limit: Int): [DomainPost]
    getRelatedPosts(blogId: String): [ReducedPost]
  }

  type Mutation {
    createPost(input: NewPostInput!): Post
    updatePost(input: UpdatePostInput!): Post
    deletePost(input: DeletePostInput!): Post
  }
`;

export default typeDefs;
