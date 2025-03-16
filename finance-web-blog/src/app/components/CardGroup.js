"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "./CardGroup.module.css";
import { useInView } from "react-intersection-observer";
import { gql } from "@apollo/client";
import client from "../client/apolloClient";

const NUMBER_OF_POSTS_TO_FETCH = 6;

async function fetchPosts(domain, offset = 0, limit = 4) {
  const GET_DOMAIN_POSTS = gql`
    query getDomainPosts($domain: String!, $offset: Int, $limit: Int) {
      getDomainPosts(domain: $domain, offset: $offset, limit: $limit) {
        id
        thumbnailUrl
        title
        domain
        description
      }
    }
  `;

  const { data } = await client.query({
    query: GET_DOMAIN_POSTS,
    variables: { domain, offset, limit },
  });

  let posts = data.getDomainPosts;

  return posts || [];
}

export default function CardGroup({ domain, initialPosts }) {
  const [posts, setPosts] = useState(initialPosts);
  const [offset, setOffset] = useState(NUMBER_OF_POSTS_TO_FETCH);
  const { ref, inView } = useInView();

  async function loadMorePosts() {
    const fetchedPosts = await fetchPosts(
      domain,
      offset,
      NUMBER_OF_POSTS_TO_FETCH
    );
    setPosts([...posts, ...fetchedPosts]);
    setOffset((offset) => offset + NUMBER_OF_POSTS_TO_FETCH);
  }

  useEffect(() => {
    if (inView) {
      loadMorePosts();
    }
  }, [inView]);

  return (
    <div className="container ps-4 pe-4">
      {posts.length === 0 ? (
        <p className="text-center mt-4">No blog posts available.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={post.id}
            className={`row align-items-center mb-4 shadow bg-white rounded ${
              styles.cardHover
            } ${
              index % 2 === 1
                ? "flex-md-row-reverse flex-column"
                : "flex-md-row flex-column"
            }`}
            style={{
              overflow: "hidden",
              display: "flex",
            }}
          >
            {/* Image Column */}
            <div
              className="col-md-4 col-12 p-0"
              style={{
                height: "250px", // Fixed height on desktop, auto on mobile
                overflow: "hidden",
              }}
            >
              <Image
                src={post.thumbnailUrl || "https://picsum.photos/500/300"}
                alt="Card image cap"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%", // Ensure full height on desktop
                  maxHeight: "250px", // Prevents image from taking too much space on mobile
                  objectFit: "cover", // Crop image instead of stretching
                }}
                priority={false}
                loading="lazy"
              />
            </div>

            {/* Text Column - Becomes full width on mobile */}
            <div className="col-md-8 col-12 d-flex flex-column justify-content-center p-4">
              {/* Title Section - Truncates Properly */}
              <div
                style={{
                  height: "3em", // Fixed height for 2 lines
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  lineHeight: "1.45em",
                  width: "100%", // Ensures full width
                }}
              >
                <Link
                  className="fw-bold fs-4 text-dark text-decoration-none d-block"
                  href={{
                    pathname: "/blogs",
                    query: { id: post.id, domain: post.domain },
                  }}
                  style={{
                    display: "block", // Fixes truncation issue
                    width: "100%",
                    whiteSpace: "normal", // Ensures wrapping before truncation
                  }}
                >
                  {post.title}
                </Link>
              </div>
              <hr></hr>
              {/* Description Section - Now Limited to Exactly 2 Lines */}
              <div
                style={{
                  height: "3em", // Ensures 2 full lines
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  fontSize: "1rem",
                  marginTop: "8px",
                  lineHeight: "1.5em", // Ensures proper spacing
                }}
              >
                <p className="card-text">{post.description}</p>
              </div>

              {/* Button Section - Always Properly Spaced */}
              <div
                className="d-flex justify-content-start"
                style={{ marginTop: "12px" }}
              >
                <Link
                  href={{
                    pathname: "/blogs",
                    query: { id: post.id, domain: post.domain },
                  }}
                  className={`btn btn-outline-primary ${styles.readMoreButton}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
      <div ref={ref}></div>
    </div>
  );
}
