import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      className={`relative bg-white overflow-hidden group cursor-pointer transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: "360px" }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col transition-all duration-300">
          {/* Image */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isHovered ? "h-[150px]" : "h-[200px]"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title and Author */}
          <div className="p-4">
            <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
            <p className="text-gray-600 text-sm">By {author}</p>

            {/* Description and Button - appears smoothly on hover */}
            {description && (
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isHovered
                    ? "max-h-[200px] mt-3 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-gray-600 line-clamp-3">
                  {description}
                </p>
                <Button variant="outline" className="gap-2 w-full mt-3">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
