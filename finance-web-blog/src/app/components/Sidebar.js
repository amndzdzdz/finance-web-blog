import styles from "./Sidebar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Minicard from "./MiniCard";
import { gql } from "@apollo/client";
import client from "../client/apolloClient";

async function fetchPosts(blogId) {
  const GET_RELATED_POSTS = gql`
    query getRelatedPosts($blogId: String) {
      getRelatedPosts(blogId: $blogId) {
        id
        thumbnailUrl
        title
      }
    }
  `;

  const { data } = await client.query({
    query: GET_RELATED_POSTS,
    variables: { blogId },
  });

  let posts = data.getRelatedPosts;

  return posts || [];
}

export default async function Sidebar({ blogId, domain }) {
  let posts = await fetchPosts(blogId);

  return (
    <div className={`text-center bg-dark rounded text-light ${styles.sidebar}`}>
      <h4 className="display-9 fw-bold">Related Posts</h4>
      <Minicard
        title={posts[0].title}
        imageSrc={posts[0].thumbnailUrl}
        id={posts[0].id}
        domain={domain}
      ></Minicard>
      <Minicard
        title={posts[1].title}
        imageSrc={posts[1].thumbnailUrl}
        id={posts[1].id}
        domain={domain}
      ></Minicard>
      <Minicard
        title={posts[2].title}
        imageSrc={posts[2].thumbnailUrl}
        id={posts[2].id}
        domain={domain}
      ></Minicard>
    </div>
  );
}
