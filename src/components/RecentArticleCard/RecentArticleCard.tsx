import React from "react";

interface RecentArticleCardProps {
  imageUrl: string;
  title: string;
}

const RecentArticleCard: React.FC<RecentArticleCardProps> = ({
  imageUrl,
  title,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-start w-[95%] mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-28 object-cover rounded mb-3"
      />
      <div className="text-xs font-semibold text-gray-800">{title}</div>
    </div>
  );
};

export default RecentArticleCard;
