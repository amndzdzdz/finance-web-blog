import "bootstrap/dist/css/bootstrap.min.css";
import { redirect } from "next/navigation";
import { gql } from "@apollo/client";
import client from "../client/apolloClient";
import "suneditor/dist/css/suneditor.min.css";
import parse from "html-react-parser";

const GET_POST = gql`
  query getPost($id: String!) {
    getPost(id: $id) {
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

export default async function Blog({ searchParams }) {
  let params = await searchParams;
  let id = params.id;

  if (!id) {
    redirect("/");
  }

  const post = await client.query({
    query: GET_POST,
    variables: { id },
  });

  const cleanPost = post.data.getPost;

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h1 className="fw-bold mt-5">{cleanPost.title}</h1>
          <div>
            <span>{cleanPost.author}</span>
            <span> - </span>
            <span>{cleanPost.domain}</span>
            <span> - </span>
            <span>{cleanPost.time} min read</span>
          </div>
          <div className="text-center">
            <img
              src={cleanPost.thumbnailUrl || "https://picsum.photos/500/300"}
              alt="Card image cap"
              className="img-fluid img-thumbnail mt-5"
              style={{ maxWidth: "75%" }}
            />
          </div>
          <div className="mt-5">{parse(cleanPost.content)}</div>
        </div>
      </div>
    </div>
  );
}
