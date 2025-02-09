import Image from "next/image";
import HeaderImage from "./components/HeaderImage.js";
import styles from "./page.module.css";
import NewsCard from "./components/NewsCard.js";

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
    <>
      <HeaderImage></HeaderImage>
      <NewsCard></NewsCard>
    </>
  );
}
