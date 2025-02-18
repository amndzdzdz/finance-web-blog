import { checkRole } from "../../utils/roles";
import { redirect } from "next/navigation";
import { SignIn, useUser } from "@clerk/nextjs";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default async function AdminDashboard() {
  // Protect the page from users who are not admins

  <SignIn />;
  const isAdmin = await checkRole("admin");
  if (!isAdmin) {
    redirect("/");
  }

  return (
    <>
      <div className="row min-vh-100">
        <div className="col-6 bg-primary d-flex align-items-center justify-content-center">
          <Link
            className="btn btn-primary border border-light"
            href={{
              pathname: "/admin/dashboard/createPost",
              query: { action: "create-post" },
            }}
          >
            Create New Post
          </Link>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center">
          <Link
            className="text-primary btn border border-primary"
            href={{
              pathname: "/admin/dashboard/editpost",
              query: { action: "modify-post" },
            }}
          >
            Update / Delete Post
          </Link>
        </div>
      </div>
    </>
  );
}
