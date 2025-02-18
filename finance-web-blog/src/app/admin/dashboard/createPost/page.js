import { checkRole } from "../../../utils/roles";
import { redirect } from "next/navigation";
import { SignIn, useUser } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "../../../components/Dashboard";
import Link from "next/link";

export default async function Editpost({ searchParams }) {
  // Protect the page from users who are not admins

  <SignIn />;
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  const params = await searchParams;

  return (
    <>
      <Link
        className="btn btn-outline-danger text-left mt-5 ms-5"
        href="/admin/dashboard"
      >
        Go back
      </Link>
      <div className="container-fluid text-center">
        <h1>Create a new post!</h1>
        <Dashboard></Dashboard>
      </div>
    </>
  );
}
