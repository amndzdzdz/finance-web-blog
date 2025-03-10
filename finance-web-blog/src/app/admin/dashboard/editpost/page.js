"use client";
import { SignIn } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../../client/apolloClient";
import { useState, useEffect } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { buttonList } from "suneditor-react";
import { CldUploadWidget } from "next-cloudinary";

const GET_ALL_POSTS = gql`
  query {
    getAllPosts {
      author
      thumbnailUrl
      domain
      content
      title
      id
      time
      description
    }
  }
`;

const UPDATE_POST = gql`
  mutation updatePost($input: UpdatePostInput!) {
    updatePost(input: $input) {
      id
      author
      thumbnailUrl
      title
      domain
      time
      description
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

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function Editpost() {
  // Protect the page from users who are not admins
  <SignIn />;

  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [id, setId] = useState(null);
  const [editorContent, setEditorContent] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const [title, setTitle] = useState(null);
  const [domain, setDomain] = useState(null);
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState(null);
  const [author, setAuthor] = useState(null);

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

  function handleOnUpload(result, widget, error) {
    if (error) {
      return;
    }
    setThumbnailUrl(result?.info.secure_url);
    widget.close({
      quiet: true,
    });
  }

  return (
    <>
      <div className="container mt-5">
        <Link
          className="btn btn-outline-danger text-left ms-2"
          href="/admin/dashboard"
        >
          Go back
        </Link>
      </div>
      <div className="container">
        <h1 className="text-center">Delete or modify an existing post!</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <select
            className="form-select mt-3 ms-2"
            aria-label="Default select example"
            onChange={(e) => {
              let value = e.target.value;
              setId(blogPosts[value]["id"]);
              setEditorContent(blogPosts[value]["content"]);
              setThumbnailUrl(blogPosts[value]["thumbnailUrl"]);
              setTitle(blogPosts[value]["title"]);
              setDomain(blogPosts[value]["domain"]);
              setTime(blogPosts[value]["time"]);
              setDescription(blogPosts[value]["description"]);
              setAuthor(blogPosts[value]["author"]);
            }}
          >
            <option defaultValue>Choose a blogentry to change/delete</option>
            {blogPosts.map((post, index) => (
              <option key={post.id} value={index}>
                {post.title}
              </option>
            ))}
          </select>
        )}

        <div className="container mt-5">
          <CldUploadWidget uploadPreset="ml_default" onSuccess={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(e) {
                e.preventDefault();
                open();
              }
              return (
                <button
                  type="button"
                  className="btn btn-primary text-white"
                  onClick={handleOnClick}
                >
                  Change thumbnail
                </button>
              );
            }}
          </CldUploadWidget>
        </div>

        <div className="container mt-3">
          <form>
            <div className="form-group">
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                placeholder="Title"
                defaultValue={title !== null ? title : ""}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                name="description"
                className="form-control"
                id="description"
                placeholder="Enter a short description that will be displayed on the webpage"
                defaultValue={description !== null ? description : ""}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                placeholder="Author"
                defaultValue={author !== null ? author : ""}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              ></input>
            </div>
            <select
              className="form-select mt-3"
              aria-label="Default select example"
              name="domain"
              id="domain"
              onChange={(e) => {
                setDomain(e.target.value);
              }}
            >
              <option defaultValue>{domain !== null ? domain : ""}</option>
              <option value="Microeconomy">Microeconomy</option>
              <option value="Macroeconomy">Macroeconomy</option>
              <option value="Politics">Politics</option>
            </select>
            <input
              type="number"
              className="form-control mt-3"
              id="time"
              name="time"
              placeholder="Estimated Read time"
              defaultValue={time !== null ? time : ""}
              onChange={(e) => {
                setTime(e.target.value);
              }}
            ></input>
            <div className="mt-4">
              <SunEditor
                id="editor"
                name="blog"
                width="100%"
                height="100%"
                setContents={editorContent !== null ? editorContent : ""}
                setOptions={{
                  height: 200,
                  buttonList: buttonList.complex,
                }}
                onChange={(content) => {
                  setEditorContent(content);
                }}
              />
            </div>
          </form>
        </div>
        <div className="container mt-3 text-center">
          <button
            disabled={author !== null ? false : true}
            onClick={async () => {
              try {
                const data = await client.mutate({
                  mutation: UPDATE_POST,
                  variables: {
                    input: {
                      id: id,
                      author: author,
                      thumbnailUrl: thumbnailUrl,
                      title: title,
                      domain: domain,
                      time: time,
                      description: description,
                      content: editorContent,
                    },
                  },
                });
                alert("Post updated successfully!");
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
            disabled={author !== null ? false : true}
            onClick={async () => {
              try {
                const data = await client.mutate({
                  mutation: DELETE_POST,
                  variables: {
                    input: {
                      id: id,
                    },
                  },
                });
                alert("Post deleted sucessfully!");
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
