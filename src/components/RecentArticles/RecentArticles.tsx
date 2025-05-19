import React, { useState, useEffect } from "react";
import RecentArticleCard from "../RecentArticleCard/RecentArticleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-[#4F5087] font-bold text-base mb-2 mt-2 w-full px-1">
        Most Recent Articles
      </h3>

      {/* Navigation Arrows */}
      <div className="w-full flex justify-between items-center mb-2 px-2">
        <button
          onClick={prevSlide}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Previous article"
        >
          <ChevronLeft className="h-5 w-5 text-[#4F5087]" />
        </button>
        <div className="flex gap-1">
          {articles.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#4F5087]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-1 rounded-full hover:bg-gray-200 transition-colors"
          aria-label="Next article"
        >
          <ChevronRight className="h-5 w-5 text-[#4F5087]" />
        </button>
      </div>

      {/* Slides Container */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {articles.map((article, idx) => (
            <div key={idx} className="w-full flex-shrink-0">
              <RecentArticleCard
                imageUrl={article.imageUrl}
                title={article.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentArticles;
