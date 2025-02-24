"use client";
//import { checkRole } from "../../../utils/roles";
import { redirect } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../../../components/Dashboard";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../../client/apolloClient";
import { useState, useEffect } from "react";

const GET_ALL_POSTS = gql`
  query {
    getAllPosts {
      author_name
      domain
      content
      heading
      id
      read_time
      summary
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      id
      author_name
      heading
      domain
      read_time
      summary
      content
    }
  }
`;

const DELETE_POST = gql`
  mutation deletePost($input: DeletePostInput!) {
    deletePost(input: $input) {
      id
    }
  }
`;

export default function Editpost() {
  // Protect the page from users who are not admins
  <SignIn />;

  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.query({ query: GET_ALL_POSTS });
        setBlogPosts(data.data.getAllPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Link
        className="btn btn-outline-danger text-left mt-5 ms-5"
        href="/admin/dashboard"
      >
        Go back
      </Link>
      <div className="container-fluid text-center">
        <h1>Delete or modify an existing post!</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <select
            className="form-select m-5"
            aria-label="Default select example"
            onChange={(e) => {
              let value = e.target.value;
              setSelectedPost({
                edit: true,
                id: blogPosts[value]["id"],
                heading: blogPosts[value]["heading"],
                author_name: blogPosts[value]["author_name"],
                domain: blogPosts[value]["domain"],
                read_time: blogPosts[value]["read_time"],
                summary: blogPosts[value]["summary"],
                content: blogPosts[value]["content"],
              });
            }}
          >
            <option defaultValue>Choose a blogentry to change/delete</option>
            {blogPosts.map((post, index) => (
              <option key={post.id} value={index}>
                {post.heading}
              </option>
            ))}
          </select>
        )}

        <div className="m-5">
          <form>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                placeholder="Title"
                defaultValue={
                  "edit" in selectedPost ? selectedPost["heading"] : ""
                }
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                name="summary"
                className="form-control"
                id="summary"
                placeholder="Enter a short description that will be displayed on the webpage"
                defaultValue={
                  "edit" in selectedPost ? selectedPost["summary"] : ""
                }
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                placeholder="Author"
                defaultValue={
                  "edit" in selectedPost ? selectedPost["author_name"] : ""
                }
              ></input>
            </div>
            <select
              className="form-select mt-3"
              aria-label="Default select example"
              name="domain"
              id="domain"
            >
              <option defaultValue>
                {"edit" in selectedPost
                  ? selectedPost["domain"]
                  : "Select domain"}
              </option>
              <option value="1">Microeconomy</option>
              <option value="2">Macroeconomy</option>
              <option value="3">Politics</option>
            </select>
            <input
              type="number"
              className="form-control mt-3"
              id="time"
              name="time"
              placeholder="Estimated Read time"
              defaultValue={
                "edit" in selectedPost
                  ? parseInt(selectedPost["read_time"])
                  : ""
              }
            ></input>
            <textarea
              className="form-control min-vh-100 mt-3"
              placeholder="Content"
              name="content"
              id="content"
              defaultValue={
                "edit" in selectedPost ? selectedPost["content"] : ""
              }
            ></textarea>
          </form>
        </div>
        <div className="container-fluid justify-content-center">
          <button
            disabled={"edit" in selectedPost ? false : true}
            onClick={async () => {
              try {
                const data = await client.mutate({
                  mutation: UPDATE_POST,
                  variables: {
                    input: {
                      id: selectedPost["id"],
                      author_name: document.getElementById("author").value,
                      heading: document.getElementById("title").value,
                      domain: document.getElementById("domain").value,
                      read_time: document.getElementById("time").value,
                      summary: document.getElementById("summary").value,
                      content: document.getElementById("content").value,
                    },
                  },
                });
                location.reload();
              } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
              }
            }}
            type="button"
            className="btn btn-outline-primary me-3"
          >
            Update post
          </button>
          <button
            disabled={"edit" in selectedPost ? false : true}
            onClick={async () => {
              try {
                const data = await client.mutate({
                  mutation: DELETE_POST,
                  variables: {
                    input: {
                      id: selectedPost["id"],
                    },
                  },
                });
                location.reload();
              } catch (error) {
                console.error("Error fetching posts:", error);
                setLoading(false);
              }
            }}
            type="submit"
            className="btn btn-outline-danger"
          >
            Delete post
          </button>
        </div>
      </div>
    </>
  );
}
