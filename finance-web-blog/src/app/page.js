import HeaderImage from "./components/HeaderImage.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NewsCard from "./components/NewsCard.js";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function Home() {
  const posts = [
    {
      image: "/images/stock-market.jpg",
      title: "Stock Market Trends for 2025",
      summary:
        "Discover the latest stock market trends and forecasts for the upcoming year.",
      link: "/posts/stock-market-trends-2025",
    },
    {
      image: "/images/investment-strategies.jpg",
      title: "Top Investment Strategies",
      summary:
        "Learn about the best investment strategies to maximize your returns.",
      link: "/posts/top-investment-strategies",
    },
  ];

  return (
    <div className={merriweather.className}>
      <HeaderImage></HeaderImage>
      <div className="container">
        <div className="row m-3">
          <div className="col m-2">
            <NewsCard></NewsCard>
          </div>
          <div className="col m-2">
            <NewsCard></NewsCard>
          </div>
          <div className="col m-2">
            <NewsCard></NewsCard>
          </div>
        </div>
      </div>
    </div>
  );
}
