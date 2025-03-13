import { gql } from "@apollo/client";
import client from "../../client/apolloClient";
import CardGroup from "../../components/CardGroup";
import Breadcroumb from "../../components/Breadcroumb";
import { redirect } from "next/navigation";

const INITIAL_NUMBER_OF_POSTS = 6;

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

export default async function Page({ params }) {
  const { domain } = await params;

  if (!domain) {
    redirect("/");
  }

  const initialPosts = await fetchPosts(domain, 0, INITIAL_NUMBER_OF_POSTS);

  return (
    <div className="container">
      <Breadcroumb domain={domain} />
      <CardGroup domain={domain} initialPosts={initialPosts} />
    </div>
  );
}
