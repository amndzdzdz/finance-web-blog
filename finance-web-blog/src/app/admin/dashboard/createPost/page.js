"use client";
import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { buttonList } from "suneditor-react";
import client from "../../../client/apolloClient";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost($input: NewPostInput!) {
    createPost(input: $input) {
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

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = (props) => {
  const [editorContent, setEditorContent] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const [title, setTitle] = useState(null);
  const [domain, setDomain] = useState(null);
  const [time, setTime] = useState(null);
  const [description, setDescription] = useState(null);
  const [author, setAuthor] = useState(null);

  function handleOnUpload(result, widget, error) {
    if (error) {
      return;
    }
    setThumbnailUrl(result?.info.secure_url);
    widget.close({
      quiet: true,
    });
  }

  function onImageUploadBefore() {
    return async (files, info, uploadHandler) => {
      if (!uploadHandler || typeof uploadHandler !== "function") {
        console.error(
          "uploadHandler is not a function. Image upload cannot proceed."
        );
        return;
      }

      const formData = new FormData();
      formData.append("file", files[0]);
      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dy2vrqulz/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        // Ensure we pass the correct format to SunEditor
        uploadHandler({
          result: [
            {
              url: data.secure_url, // Cloudinary image URL
              name: files[0].name,
              size: files[0].size,
            },
          ],
        });
      } catch (error) {
        uploadHandler({
          errorMessage: "Image upload failed. Please try again.",
        });
      }
    };
  }

  async function sendPost() {
    if (!thumbnailUrl) {
      alert("A thumbnail is required!");
      return;
    }

    if (!title.trim()) {
      alert("A title is required!");
      return;
    }

    if (!author.trim()) {
      alert("An author is required!");
      return;
    }

    if (domain === null) {
      alert("A domain is required");
      return;
    }

    if (!time.trim()) {
      alert("The read time is required");
      return;
    }

    if (!editorContent.trim()) {
      alert("You didn't write anything");
      return;
    }

    if (!description.trim()) {
      alert("A short description is required");
      return;
    }

    try {
      const data = await client.mutate({
        mutation: CREATE_POST,
        variables: {
          input: {
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
      alert("Post created successfully!");
      location.reload();
    } catch (error) {
      throw new Error("Couldn't upload post, error: " + error.message);
    }
  }

  return (
    <div className="m-5">
      <h1 className="text-center mb-5">Create your blog post</h1>
      <div className="container-lg">
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
                Upload thumbnail
              </button>
            );
          }}
        </CldUploadWidget>
      </div>

      <div className="container mt-3 mb-3">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              id="title"
              placeholder="Title"
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
            <option defaultValue>Choose a domain</option>
            <option value="microeconomy">microeconomy</option>
            <option value="macroeconomy">macroeconomy</option>
            <option value="politics">politics</option>
          </select>
          <input
            type="number"
            className="form-control mt-3"
            id="time"
            name="time"
            placeholder="Estimated Read time"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          ></input>
        </form>
      </div>
      <div className="container-lg">
        <SunEditor
          id="editor"
          name="blog"
          width="100%"
          height="100%"
          setOptions={{
            height: 200,
            buttonList: buttonList.complex,
          }}
          onImageUploadBefore={onImageUploadBefore()}
          onChange={(content) => {
            setEditorContent(content);
          }}
        />
      </div>
      <div className="text-center mt-5">
        <button onClick={sendPost} className="btn btn-outline-primary">
          Create Post
        </button>
      </div>
    </div>
  );
};
export default MyComponent;
