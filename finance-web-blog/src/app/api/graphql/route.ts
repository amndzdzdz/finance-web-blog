import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import mongoose from "mongoose";
import Posts from "./datasources";
import BlogModel from "./models";

const uri = "my_priv_uri";

const connectDB = async () => {
  try {
    if (uri) {
      await mongoose.connect(uri);
      console.log("Connected to database successfully!!");
    }
  } catch (error) {
    console.error(error);
    console.log("Connection to database failed!")
  }
}

connectDB();

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req, res) => ({
    req,
    res,
    dataSources: {
      posts: new Posts({ modelOrCollection: BlogModel }),
    },
  }),
});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}

