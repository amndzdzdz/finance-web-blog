"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DropdownMenu() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  let pathName = usePathname();

  return (
    <div ref={dropdownRef}>
      <button
        ref={buttonRef}
        onClick={() => setDropdown(!dropdown)}
        className={
          "text-light nav-link " + (pathName === "/blog-list" ? "active " : " ")
        }
        id="dropdownMenuButton"
        aria-current="page"
        type="button"
      >
        Blogs
      </button>

      <ul
        className={`dropdown-menu bg-transparent border-0 ${
          dropdown ? "show" : ""
        }`}
        aria-labelledby="dropdownMenuButton"
      >
        <li className="mb-1">
          <Link
            className={
              (pathName !== "/" ? "text-dark" : "text-light") +
              " text-decoration-underline"
            }
            href={{
              pathname: "/blog-list",
              query: { domain: "macroeconomy" },
            }}
          >
            Macroeconomics
          </Link>
        </li>
        <li className="mb-1">
          <Link
            className={
              (pathName !== "/" ? "text-dark" : "text-light") +
              " text-decoration-underline"
            }
            href={{
              pathname: "/blog-list",
              query: { domain: "microeconomy" },
            }}
          >
            Microeconomics
          </Link>
        </li>
        <li className="mb-1">
          <Link
            className={
              (pathName !== "/" ? "text-dark" : "text-light") +
              " text-decoration-underline"
            }
            href={{
              pathname: "/blog-list",
              query: { domain: "politics" },
            }}
          >
            Politics
          </Link>
        </li>
      </ul>
    </div>
  );
}
