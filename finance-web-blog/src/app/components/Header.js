"use client";
import styles from "./Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ backgroundColor: "#111111" }}>
      <nav className="container">
        <ul className="nav nav-underline mx-auto order-0">
          <li className="nav-item navbar-brand mx-auto">
            <Link
              className="text-light nav-link active"
              aria-current="page"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item navbar-brand mx-auto">
            <Link className="text-light nav-link" href="/blogs">
              Blogs
            </Link>
          </li>
          <li className="nav-item navbar-brand mx-auto">
            <Link className="text-light nav-link" href="/about">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
