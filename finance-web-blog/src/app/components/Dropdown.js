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

  // Function to close dropdown after clicking an item
  const handleItemClick = () => {
    setDropdown(false);
  };

  return (
    <div ref={dropdownRef} className="position-relative">
      <button
        ref={buttonRef}
        onClick={() => setDropdown(!dropdown)}
        className={
          "text-light nav-link px-3 py-2 " +
          (pathName === "/blog-list" ? "active " : " ")
        }
        id="dropdownMenuButton"
        aria-current="page"
        type="button"
      >
        Blogs
      </button>

      <ul
        className={`dropdown-menu shadow bg-white border-0 ${
          dropdown ? "show" : ""
        }`}
        aria-labelledby="dropdownMenuButton"
        style={{
          minWidth: "200px",
          borderRadius: "8px",
          padding: "10px",
        }}
      >
        {[
          { name: "Macroeconomy", domain: "macroeconomy" },
          { name: "Microeconomy", domain: "microeconomy" },
          { name: "Politics", domain: "politics" },
        ].map(({ name, domain }) => (
          <li key={domain} className="mb-2">
            <Link
              className="dropdown-item text-dark px-3 py-2"
              href={{
                pathname: "/blog-list/" + domain,
              }}
              onClick={handleItemClick} // Close dropdown on click
              style={{
                transition: "all 0.2s ease-in-out",
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Custom CSS for hover effect */}
      <style jsx>{`
        .dropdown-item {
          position: relative;
          display: block;
        }

        .dropdown-item:hover {
          text-decoration: underline;
          color: #007bff !important; /* Bootstrap primary color */
        }

        .dropdown-item::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          background-color: #007bff;
          bottom: 0;
          left: 50%;
          text-decoration: underline;
          transition: width 0.3s easecondaryse-in-out, left 0.3s ease-in-out;
        }

        .dropdown-item:hover::after {
          text-decoration: underline;
          width: 100%;
          left: 0;
        }
      `}</style>
    </div>
  );
}
