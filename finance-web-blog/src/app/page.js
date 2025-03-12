import HeaderImage from "./components/HeaderImage";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard";
import { gql } from "@apollo/client";
import client from "./client/apolloClient";
import Head from "next/head";

// GraphQL Query
const GET_MAIN_POSTS = gql`
  query {
    getMainPosts {
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

async function fetchPosts() {
  const { data } = await client.query({ query: GET_MAIN_POSTS });
  return data.getMainPosts || [];
}

export default async function Home() {
  const arrayPreReverse = await fetchPosts();
  let posts = arrayPreReverse.slice(0);
  posts = posts.reverse();

  return (
    <div>
      <Head>
        <link rel="preload" as="image" href="/img.webp" type="image/webp" />
      </Head>
      <HeaderImage />
      <div className="container mt-5">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          <div>
            <h1 className="text-center display-5 fw-bold">Latest Posts</h1>
            <div className="row">
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="col-md-4 d-flex justify-content-center mb-4"
                >
                  <NewsCard post={post} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
