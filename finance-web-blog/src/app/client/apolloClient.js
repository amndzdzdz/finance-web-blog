// client/apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

// Check if running on server or client
const isServer = typeof window === "undefined";

// Use absolute URL for server-side requests, and relative for client-side
const uri = isServer
  ? "http://localhost:3000/api/graphql" // Absolute URL for server-side
  : "/api/graphql"; // Relative URL for client-side

const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
});

export default client;
