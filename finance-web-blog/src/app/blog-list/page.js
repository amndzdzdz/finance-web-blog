import React from "react";
import CardGroup from "../components/CardGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { gql } from "@apollo/client";
import client from "../client/apolloClient";
import { redirect } from "next/navigation";

const GET_MAIN_POSTS = gql`
  query {
    getMainPosts {
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

export default async function Page({ searchParams }) {
  const fetchedData = await client.query({ query: GET_MAIN_POSTS });
  let data = fetchedData.data.getMainPosts;

  let params = await searchParams;
  let domain = params.domain;

  if (!domain) {
    redirect("/");
  }

  let cardsData = data.filter((blog) => {
    return blog["domain"].toLowerCase() === domain.toLowerCase();
  });
  return (
    <div>
      <div className="container mt-3 mb-5 bg-secondary text-light p-1 rounded">
        <Link className="m-2" href="/">
          blogs
        </Link>
        <span>&gt;</span>
        <span className="m-2" href="/">
          {domain}
        </span>
      </div>
      <CardGroup cards={cardsData} />
    </div>
  );
}
