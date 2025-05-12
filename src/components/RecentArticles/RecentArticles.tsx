import React from "react";
import RecentArticleCard from "../RecentArticleCard/RecentArticleCard";

const articles = [
  {
    imageUrl: "/images/research-articles/research_1.png",
    title:
      "Integrating IoT and AI for Advanced Predictive Maintenance: Innovations in Condition Monitoring Systems using MOORA method",
  },
  {
    imageUrl: "/images/research-articles/research_2.png",
    title:
      "Comparative Evaluation of Advanced Robotics in Engineering Using the COPRAS Method",
  },
  {
    imageUrl: "/images/research-articles/research_3.png",
    title:
      "AI in Power Systems: Strategic Insights from Grey Relational Analysis (GRA) Evaluation of Performance Metrics",
  },
];

const RecentArticles = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-[#4F5087] font-bold text-base mb-5 mt-2 w-full px-1">
        Most Recent Articles
      </h3>
      <div className="flex flex-col gap-5 w-full items-center">
        {articles.map((article, idx) => (
          <RecentArticleCard
            key={idx}
            imageUrl={article.imageUrl}
            title={article.title}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;
