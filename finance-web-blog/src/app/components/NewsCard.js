import "bootstrap/dist/css/bootstrap.min.css";

export default function NewsCard() {
  const posts = {
    image: "/images/stock-market.jpg",
    title: "Stock Market Trends for 2025",
    summary:
      "Discover the latest stock market trends and forecasts for the upcoming year.",
    link: "/posts/stock-market-trends-2025",
  };

  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img class="card-img-top" src="stonks.jpg" alt="Card image cap"></img>
        <hr></hr>
        <div class="card-body">
          <h5>Stock Market Trends for 2025</h5>
          <p class="card-text">
            Discover the latest stock market trends and forecasts for the
            upcoming year.
          </p>
        </div>
      </div>
    </>
  );
}
