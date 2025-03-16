const typeDefs = `#graphql
  type Comment {
    name: String
    email: String
    website: String
    date: String
    comment: String
    }

  type Post {
    id: String!
    author: String!
    thumbnailUrl: String!
    title: String!
    date: String!
    domain: String!
    time: String!
    description: String!
    content: String!
    comments: [Comment]
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

  input CommentInput {
    name: String
    email: String
    website: String
    date: String
    comment: String
    }

  input NewCommentInput {
    id: String
    name: String
    email: String
    website: String
    date: String
    comment: String
    }
  
  input NewPostInput {
    author: String!
    thumbnailUrl: String!
    title: String!
    date: String!
    domain: String!
    time: String!
    description: String!
    content: String!
    comments: [CommentInput]
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
    addComment(input: NewCommentInput!): Post
  }
`;

export default typeDefs;
