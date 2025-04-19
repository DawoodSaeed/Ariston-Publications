
import { useState } from "react";

interface BookCardProps {
  title: string;
  author: string;
  image: string;
  description?: string;
}

const BookCard = ({ title, author, image, description }: BookCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-95' : 'scale-100'
          }`}
        />
        {isHovered && description && (
          <div className="absolute inset-0 bg-black/70 p-4 flex items-center justify-center animate-fade-in">
            <p className="text-white text-sm">
              {description}
            </p>
          </div>
        )}
      </div>
      <div className={`p-4 transition-transform duration-300 ${isHovered ? '-translate-y-2' : 'translate-y-0'}`}>
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-gray-600 mt-1">Authors: {author}</p>
      </div>
    </div>
  );
};

export default BookCard;
