import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import BookCard from "./BookCard";
import ViewMoreButton from "@/components/ui/view-more-button";
import SectionBadge from "@/components/ui/section-badge";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
  sectionBadgeTitle?: string;
  background?: string;
}

const BooksSection = ({
  title,
  description,
  books,
  onViewMore,
  sectionBadgeTitle = "OUR BOOKS",
  background = "white",
}: BooksSectionProps) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 16 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
  });

  return (
    <section
      className={`bg-[${background}] py-20 md:py-20`}
      style={{ height: "845px" }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col mb-6">
          <SectionBadge title={sectionBadgeTitle} />
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-4xl font-bold text-[#1a1b4b]">{title}</h2>
            {onViewMore && <ViewMoreButton onClick={onViewMore} />}
          </div>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-base mb-10 max-w-4xl">
            {description}
          </p>
        )}

        {/* Slider Container with Arrows */}
        <div className="relative">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>

          <div ref={sliderRef} className="keen-slider px-4">
            {books.map((book) => (
              <div
                key={book.title}
                className="keen-slider__slide flex justify-center"
              >
                <BookCard {...book} />
              </div>
            ))}
          </div>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
