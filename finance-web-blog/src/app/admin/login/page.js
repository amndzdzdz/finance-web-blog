"use client";
import { SignIn, useUser } from "@clerk/nextjs";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const { user } = useUser();

  if (!user) {
    return <SignIn />;
  }

  return (
    <div className="min-vh-100 bg-primary d-flex justify-content-center align-items-center">
      <Link
        className="mx-auto btn btn-primary fw-bold border border-light"
        href="/admin/dashboard"
      >
        Go to Admin Dashboard
      </Link>
    </div>
  );
}
