import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function CardGroup({ cards }) {
  return (
    <div className="container">
      {cards.length === 0 ? (
        <p className="text-center mt-4">No blog posts available.</p>
      ) : (
        cards.map((post, index) => (
          <div
            key={post.id}
            className={`row align-items-center mb-4 shadow bg-white rounded ${
              index % 2 === 1
                ? "flex-md-row-reverse flex-column"
                : "flex-md-row flex-column"
            }`}
            style={{
              overflow: "hidden",
              display: "flex",
            }}
          >
            {/* Image Column */}
            <div
              className="col-md-4 col-12 p-0"
              style={{
                height: "250px", // Fixed height on desktop, auto on mobile
                overflow: "hidden",
              }}
            >
              <img
                src={post.thumbnailUrl || "https://picsum.photos/500/300"}
                alt="Card image cap"
                style={{
                  width: "100%",
                  height: "100%", // Ensure full height on desktop
                  maxHeight: "250px", // Prevents image from taking too much space on mobile
                  objectFit: "cover", // Crop image instead of stretching
                }}
              />
            </div>

            {/* Text Column - Becomes full width on mobile */}
            <div className="col-md-8 col-12 d-flex flex-column justify-content-center p-4">
              {/* Title Section - Truncates Properly */}
              <div
                style={{
                  height: "3em", // Fixed height for 2 lines
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  lineHeight: "1.45em",
                  width: "100%", // Ensures full width
                }}
              >
                <Link
                  className="fw-bold fs-4 text-dark text-decoration-underline d-block"
                  href={{
                    pathname: "/blogs",
                    query: { id: post.id },
                  }}
                  style={{
                    display: "block", // Fixes truncation issue
                    width: "100%",
                    whiteSpace: "normal", // Ensures wrapping before truncation
                  }}
                >
                  {post.title}
                </Link>
              </div>

              {/* Description Section - Now Limited to Exactly 2 Lines */}
              <div
                style={{
                  height: "3em", // Ensures 2 full lines
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  fontSize: "1rem",
                  marginTop: "8px",
                  lineHeight: "1.5em", // Ensures proper spacing
                }}
              >
                <p className="card-text">{post.description}</p>
              </div>

              {/* Button Section - Always Properly Spaced */}
              <div
                className="d-flex justify-content-start"
                style={{ marginTop: "12px" }}
              >
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
            </div>
          </div>
        ))
      )}
    </div>
  );
}
