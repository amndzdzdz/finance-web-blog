import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div
      style={{ backgroundColor: "#111111", height: "25vh" }}
      className="footer mt-5 row"
    >
      <div className="col-5 m-5 text-center">
        <Link href="/" className="text-light d-block mb-3 ml-3">
          Home
        </Link>{" "}
        <Link href="/blogs" className="text-light d-block mb-3">
          Blogs
        </Link>{" "}
        <Link href="/about" className="text-light d-block">
          About
        </Link>{" "}
      </div>
      <div className="col-5 mt-5 text-center">
        <p className="text-light">
          *name* consists of four students from different universities across
          Germany, united by our shared passion for economics. Through
          collaboration and diverse perspectives, we aim to deepen our
          understanding of economic trends and their impact on businesses and
          societies worldwide.
        </p>
      </div>
    </div>
  );
}
