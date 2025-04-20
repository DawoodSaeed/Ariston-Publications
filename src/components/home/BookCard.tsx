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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative bg-[#F3F3F8] overflow-hidden group cursor-pointer transition-all duration-300 rounded-9xl p-6`}
      style={{
        width: "360px",
        borderRadius: "24px",
        marginRight: "-10px",
        height: "380px",
      }}
    >
      <CardContent className="px-0">
        <div className="flex flex-col transition-all duration-300 ">
          {/* Image */}
          <div
            className={`transition-all duration-300 overflow-hidden ${
              isHovered ? "h-[100px]" : "h-[200px]"
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
            <h3 className="font-bold text-19px line-clamp-2 letter-spacing-0 text-capitalize text-[#0B0C58]">
              {title}
            </h3>

            <hr
              style={{
                backgroundColor: "#03200E1A",
                height: "1px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <p
              style={{
                color: "#222222",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              Author: {author}
            </p>

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
