import { checkRole } from "../../../utils/roles";
import { redirect } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../../../components/Dashboard";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../../../client/apolloClient";
import { createKey } from "next/dist/shared/lib/router/router";

async function getBlogPosts() {
  const GET_ALL_POSTS = gql`
    query {
      getAllPosts {
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

  try {
    const data = await client.query({ query: GET_ALL_POSTS });
    const posts = await data["data"]["getAllPosts"];
    return posts;
  } catch (error) {
    throw new Error("Couldn't fetch data from server");
  }
}

export default async function Editpost() {
  // Protect the page from users who are not admins

  <SignIn />;
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  const blogPosts = await getBlogPosts();
  console.log(blogPosts);

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

        <select className="form-select m-5" aria-label="Default select example">
          <option defaultValue>Choose a blogentry to change/delete</option>
          {blogPosts.map((post, index) => (
            <option key={post.id} value={index + 1}>
              {post.heading}
            </option>
          ))}
        </select>

        <Dashboard></Dashboard>
      </div>
    </>
  );
}
