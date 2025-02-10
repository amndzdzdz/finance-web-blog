import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function NewsCard() {
  const posts = {
    id: "1234",
    image: "/images/stock-market.jpg",
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
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="stonks.jpg"
          alt="Card image cap"
        ></img>
        <hr></hr>
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
      </div>
    </>
  );
}
