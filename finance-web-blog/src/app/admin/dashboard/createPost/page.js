import { redirect } from "next/navigation";
import { SignIn, useUser } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import client from "../../../client/apolloClient";
import Link from "next/link";
import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation createPost($input: NewPostInput!) {
    createPost(input: $input) {
      author_name
      heading
      domain
      read_time
      summary
      content
    }
  }
`;

export default function Editpost() {
  <SignIn />;

  async function createPost(formData) {
    "use server";
    try {
      console.log(formData);
      const data = await client.mutate({
        mutation: CREATE_POST,
        variables: {
          input: {
            author_name: formData.get("author"),
            heading: formData.get("title"),
            domain: formData.get("domain"),
            read_time: formData.get("time"),
            summary: formData.get("summary"),
            content: formData.get("content"),
          },
        },
      });
    } catch (error) {
      throw new Error("An error occured:", error);
    }
  }

  return (
    <>
      <Link
        className="btn btn-outline-danger text-left mt-5 ms-5"
        href="/admin/dashboard"
      >
        Go back
      </Link>
      <div className="container-fluid text-center">
        <h1>Create a new post!</h1>
        <div className="m-5">
          <form action={createPost}>
            <div className="form-group">
              <input
                required
                type="text"
                name="title"
                className="form-control"
                id="title"
                placeholder="Title"
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                required
                type="text"
                name="summary"
                className="form-control"
                id="summary"
                placeholder="Enter a short description that will be displayed on the webpage"
              ></input>
            </div>
            <div className="form-group mt-3">
              <input
                required
                type="text"
                className="form-control"
                name="author"
                id="author"
                placeholder="Author"
              ></input>
            </div>
            <select
              required
              className="form-select mt-3"
              aria-label="Default select example"
              name="domain"
              id="domain"
            >
              <option defaultValue>Choose a domain</option>
              <option value="1">Microeconomy</option>
              <option value="2">Macroeconomy</option>
              <option value="3">Politics</option>
            </select>
            <input
              required
              type="number"
              className="form-control mt-3"
              id="time"
              name="time"
              placeholder="Estimated Read time"
            ></input>
            <textarea
              required
              className="form-control min-vh-100 mt-3"
              placeholder="Content"
              name="content"
              id="content"
            ></textarea>
            <button type="submit" className="btn btn-outline-primary me-3">
              Create post
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
