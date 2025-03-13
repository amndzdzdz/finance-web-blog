"use client";
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { gql } from "@apollo/client";
import client from "../client/apolloClient";
import { useInView } from "react-intersection-observer";

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

const NUMBER_OF_POSTS_TO_FETCH = 9;

export default function BlogList({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const { ref, inView } = useInView();

  async function loadMorePosts() {
    const fetchedPosts = await fetchPosts(offset, NUMBER_OF_POSTS_TO_FETCH);
    setPosts([...posts, ...fetchedPosts]);
    setOffset((offset) => offset + NUMBER_OF_POSTS_TO_FETCH);
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <div className="container mt-5">
      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        <div className="container">
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
          <div ref={ref}></div>
        </div>
      )}
    </div>
  );
}
