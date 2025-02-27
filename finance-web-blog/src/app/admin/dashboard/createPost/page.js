"use client";
import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { buttonList } from "suneditor-react";
import { useState } from "react";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = (props) => {
  const [editorContent, setEditorContent] = useState("");
  const [resource, setResource] = useState();

  const [thumbnailUrl, setThumbnailUrl] = useState();

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
    <div className="m-5">
      <h1 className="text-center mb-5">Create your blog post</h1>

      <div className="mb-3">
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

      <SunEditor
        id="editor"
        name="blog"
        width="100%"
        height="100%"
        setOptions={{
          height: 200,
          buttonList: buttonList.complex,
        }}
        onChange={(content) => {
          setEditorContent(content);
        }}
      />

      <div className="text-center mt-5">
        <button
          onClick={() => {
            console.log(thumbnailUrl);
          }}
          className="btn btn-outline-primary"
        >
          Create Post
        </button>
      </div>
    </div>
  );
};
export default MyComponent;
