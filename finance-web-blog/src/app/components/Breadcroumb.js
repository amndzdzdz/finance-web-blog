import Link from "next/link";
import "./Breadcroumb.module.css";

export default function Breadcroumb({ domain }) {
  return (
    <div className="mt-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-dark p-2 rounded shadow-sm">
          <li className="breadcrumb-item">
            <Link
              href="/"
              className="text-light fw-semibold text-decoration-none"
            >
              blogs
            </Link>
          </li>
          <li className="breadcrumb-item text-light">/</li>
          <li
            className="breadcrumb-item active fw-semibold text-light"
            aria-current="page"
          >
            {domain.toLowerCase()}
          </li>
        </ol>
      </nav>
    </div>
  );
}
