"use client";
import React from "react";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.min.css";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import { buttonList } from "suneditor-react";
import { useState } from "react";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

const MyComponent = (props) => {
  const [editorContent, setEditorContent] = useState("");

  return (
    <div className="m-5">
      <h1 className="text-center mb-5">Create your blog post</h1>
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

      <button
        onClick={console.log(editorContent)}
        className="justify-content-center btn btn-outline-primary"
      >
        Create Post
      </button>
    </div>
  );
};
export default MyComponent;
