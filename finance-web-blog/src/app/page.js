import HeaderImage from "./components/HeaderImage";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard";
import { gql } from "@apollo/client";
import client from "./client/apolloClient";
import Head from "next/head";
import BlogList from "./components/BlogList";

const INITIAL_NUMBER_OF_POSTS = 9;

export async function fetchPosts(offset = 0, limit = 4) {
  const GET_MAIN_POSTS = gql`
    query GetMainPosts($offset: Int, $limit: Int) {
      getMainPosts(offset: $offset, limit: $limit) {
        id
        author
        thumbnailUrl
        title
        domain
        time
        description
      }
    }
  `;

  const { data } = await client.query({
    query: GET_MAIN_POSTS,
    variables: { offset, limit },
  });

  let posts = data.getMainPosts;

  return posts || [];
}

export default async function Home() {
  const initialPosts = await fetchPosts(0, INITIAL_NUMBER_OF_POSTS);

  return (
    <div>
      <Head>
        <link rel="preload" as="image" href="/img.webp" type="image/webp" />
      </Head>
      <HeaderImage />
      <BlogList initialPosts={initialPosts}></BlogList>
    </div>
  );
}
