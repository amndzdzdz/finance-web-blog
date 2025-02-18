import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function NewsCard() {
  const posts = {
    id: "1234",
    image: "https://picsum.photos/450/250",
    title: "Stock Market Trends for 2025",
    summary:
      "Discover the latest stock market trends and forecasts for the upcoming year.",
    link: "/posts/stock-market-trends-2025",
  };
  // const router = useRouter();
  // router.query.NEWPARAMS = posts["id"];
  // router.push(router);

  return (
    <>
      <div
        className="card border-0 shadow p-3 mb-5 bg-white rounded"
        style={{ width: "18rem" }}
      >
        <img
          className="card-img-top"
          src="https://picsum.photos/450/250"
          alt="Card image cap"
        ></img>

        <div className="card-body">
          <Link
            className="fw-bold fs-6 text-decoration-underline"
            href="/blogs"
          >
            Stock Market Trends for 2025
          </Link>
          <p className="card-text">
            Discover the latest stock market trends and forecasts for the
            upcoming year.
          </p>
        </div>

        <a href="/" className="btn btn-outline-primary">
          Read More
        </a>
      </div>
    </>
  );
}
