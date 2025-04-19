
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
      className="relative bg-white overflow-hidden group cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        <div className="aspect-[3/2] relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-transform duration-300 ${
              isHovered ? 'scale-95 aspect-[3/2.5]' : 'scale-100'
            }`}
          />
        </div>
        <div className="p-6 space-y-3">
          <h3 className={`font-semibold text-lg transition-transform duration-300 ${
            isHovered ? '-translate-y-2' : 'translate-y-0'
          }`}>
            {title}
          </h3>
          <p className="text-gray-600 text-sm">By {author}</p>
          {isHovered && description && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-sm text-gray-600">
                {description}
              </p>
              <Button variant="outline" className="gap-2">
                Read More <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BookCard;
