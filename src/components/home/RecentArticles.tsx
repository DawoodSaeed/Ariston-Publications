import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import React from "react";

export type Article = {
  title: string;
  date: string;
  imageUrl: string;
};

export type RecentArticlesProps = {
  heading: string;
  articles: Article[];
};

const RecentArticles: React.FC<RecentArticlesProps> = ({
  heading,
  articles,
}) => {
  return (
    <section className="pt-16 md:pt-24">
      <h2
        className="text-center text-[45.94px] leading-[57.6px] font-extrabold text-[#0B0C58] capitalize"
        style={{ fontFamily: "Inter" }}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-7xl mx-auto mt-10">
        {articles.map((article, index) => (
          <Card
            key={index}
            className="rounded-2xl bg-white p-6 shadow-md w-full max-w-[396px] h-[440px] mx-auto transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative w-full max-w-[348px] h-[247px] mx-auto">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="rounded-[16px] w-full h-full object-cover"
              />
              <div
                className="absolute top-3 left-3 bg-white flex items-center px-4 h-[34px] rounded-full shadow-sm"
                style={{ width: "126px" }}
              >
                <Calendar className="h-4 w-4 mr-2 text-[#0B0C58]" />
                <span
                  className="text-[14px] leading-[23.8px] font-medium text-[#222222]"
                  style={{ fontFamily: "Inter" }}
                >
                  {article.date}
                </span>
              </div>
            </div>
            <CardContent className="p-0 mt-4 space-y-2">
              <p
                className="text-[20px] leading-[33.6px] font-bold text-[#0B0C58] mt-2"
                style={{ fontFamily: "Inter" }}
              >
                {article.title}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RecentArticles;
