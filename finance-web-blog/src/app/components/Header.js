"use client";
import DropdownMenu from "./Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  var test = `test`;
  return (
    <header style={{ backgroundColor: "#111111" }}>
      <nav className="container">
        <ul className="nav nav-underline mx-auto order-0">
          <li className="nav-item navbar-brand mx-auto">
            <Link
              className={
                "text-light nav-link " + (pathName === "/" ? "active" : "")
              }
              aria-current="page"
              href="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item navbar-brand mx-auto">
            <DropdownMenu></DropdownMenu>
          </li>
          <li className="nav-item navbar-brand mx-auto">
            <Link
              className={
                "text-light nav-link " + (pathName === "/about" ? "active" : "")
              }
              href="/about"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
