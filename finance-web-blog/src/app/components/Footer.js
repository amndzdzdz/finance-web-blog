import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#111111" }}
      className="footer mt-5 py-4 px-3 text-center"
    >
      <div className="container">
        <div className="row justify-content-center">
          {/* Navigation Links */}
          <div className="col-md-5 col-12 mb-4">
            <Link href="/" className="text-light d-block mb-2">
              Home
            </Link>
            <Link href="/blogs" className="text-light d-block mb-2">
              Blogs
            </Link>
            <Link href="/about" className="text-light d-block">
              About
            </Link>
          </div>

          {/* Description */}
          <div className="col-md-6 col-12">
            <p className="text-light">
              We are four students from different universities across Germany,
              united by our shared passion for economics. Through collaboration
              and diverse perspectives, we aim to deepen our understanding of
              economic trends and their impact on businesses and societies
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
