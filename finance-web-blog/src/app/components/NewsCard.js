import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function NewsCard({ post }) {
  return (
    <div
      className="card border-0 shadow p-3 mb-5 bg-white rounded"
      style={{ width: "22rem", height: "30rem" }} // Increased size
    >
      <img
        className="card-img-top"
        src={post.thumbnailUrl || "https://picsum.photos/500/300"}
        alt="Card image cap"
        style={{ height: "180px", objectFit: "cover" }} // Ensures image fits well
      />

      <div className="card-body">
        <Link
          className="fw-bold fs-5 text-decoration-underline" // Increased font size
          href={{
            pathname: "/blogs",
            query: { id: post.id },
          }}
        >
          {post.title}
        </Link>
        <p className="card-text" style={{ fontSize: "1rem" }}>
          {post.description}
        </p>
      </div>

      <Link
        href={{
          pathname: "/blogs",
          query: { id: post.id },
        }}
        className="btn btn-outline-primary"
      >
        Read More
      </Link>
    </div>
  );
}
