import { ArrowRight } from "lucide-react";
import BookCard from "./BookCard";
import ViewMoreButton from "@/components/ui/view-more-button";

interface Book {
  title: string;
  author: string;
  image: string;
  description?: string;
}

interface BooksSectionProps {
  title: string;
  description?: string;
  books: Book[];
  onViewMore?: () => void;
}

const BooksSection = ({
  title,
  description,
  books,
  onViewMore,
}: BooksSectionProps) => {
  return (
    <section className="bg-gray-50 py-24 md:py-28" style={{ height: "754px" }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold text-[#1a1b4b]">{title}</h2>
          {onViewMore && <ViewMoreButton onClick={onViewMore} />}
        </div>
        {description && (
          <p className="text-gray-600 text-base mb-10 max-w-4xl">
            {description}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
