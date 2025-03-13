import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "./NewsCard.module.css";

export default function NewsCard({ post }) {
  return (
    <div
      className={`card border-0 shadow p-3 mb-5 bg-white rounded d-flex flex-column ${styles.cardHover}`}
      style={{ width: "22rem", height: "30rem", overflow: "hidden" }}
    >
      <Image
        className="card-img-top"
        src={post.thumbnailUrl || "https://picsum.photos/500/300"}
        alt="Card image cap"
        width={500} // Set intrinsic width
        height={180} // Respects this height
        style={{ objectFit: "cover" }}
        priority={false}
        loading="lazy" // Ensures image fits well
      />

      {/* Card Body */}
      <div className="card-body d-flex flex-column flex-grow-1">
        {/* Title Section - Fixes Third Line Cutoff */}
        <div
          style={{
            height: "4.5em", // Ensures space for 3 full lines
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3, // Limits title to 3 lines
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            lineHeight: "1.5em", // Fixes cutoff issue
          }}
        >
          <Link
            className="fw-bold fs-5 text-dark text-decoration-none d-block"
            href={{
              pathname: "/blogs",
              query: { id: post.id, domain: post.domain },
            }}
          >
            {post.title}
          </Link>
        </div>
        <hr></hr>

        <div
          style={{
            height: "4.5em", // Fixed height for 3-line description
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
            fontSize: "1rem",
            marginTop: "8px",
            lineHeight: "1.5em", // Ensures text is fully visible
          }}
        >
          <p className="card-text">{post.description}</p>
        </div>

        {/* Button Section */}
        <div className="mt-auto d-flex justify-content-center">
          <Link
            href={{
              pathname: "/blogs",
              query: { id: post.id, domain: post.domain },
            }}
            className={`btn btn-outline-primary ${styles.readMoreButton}`}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
