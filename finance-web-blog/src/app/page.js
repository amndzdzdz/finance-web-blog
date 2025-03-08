import HeaderImage from "./components/HeaderImage";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard";
import { gql } from "@apollo/client";
import client from "./client/apolloClient";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

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
  const posts = await fetchPosts(); // Fetch on the server

  return (
    <div className={merriweather.className}>
      <HeaderImage />
      <div className="container mt-5">
        {posts.length === 0 ? (
          <p>No posts available.</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}
