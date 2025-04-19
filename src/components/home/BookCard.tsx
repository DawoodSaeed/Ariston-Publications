
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  description?: string;
}

const BookCard = ({ title, author, image, description }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="relative bg-white overflow-hidden group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isHovered ? 'scale-95' : 'scale-100'
            }`}
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className={`font-semibold text-lg transition-transform duration-300 ${
            isHovered ? '-translate-y-2' : 'translate-y-0'
          }`}>
            {title}
          </h3>
          {isHovered && description && (
            <p className="text-sm text-gray-600 animate-fade-in">
              {description}
            </p>
          )}
          <p className="text-gray-600 text-sm">Authors: {author}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
