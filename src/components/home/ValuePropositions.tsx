import { ReactNode } from "react";
import ValueCard from "./ValueCard";
import SectionBadge from "@/components/ui/section-badge";
import EventCard from "./EventCard";

interface ValueProposition {
  icon: ReactNode;
  title: string;
  description: string;
}

interface ValuePropositionsProps {
  welcomeTitle: string;
  welcomeDescription: string;
  onGetMore?: () => void;
  valuePropositions: ValueProposition[];
  sectionBadgeTitle?: string;
  valueCard?: boolean;
}

const ValuePropositions = ({
  welcomeTitle,
  welcomeDescription,
  onGetMore,
  valuePropositions,
  sectionBadgeTitle = "ABOUT US",
  valueCard = true,
}: ValuePropositionsProps) => {
  return (
    <section className="pt-16 md:pt-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left side - Welcome Text */}
          <div className="lg:w-[45%]">
            <SectionBadge title={sectionBadgeTitle} />
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1b4b] mb-6">
              {welcomeTitle}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {welcomeDescription}
            </p>
            <button
              onClick={onGetMore}
              className="mt-8 px-6 py-2.5 bg-white text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors font-medium"
            >
              See More
            </button>
          </div>

          {/* Right side - Value Propositions */}
          <div className="lg:w-[55%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valuePropositions.map((prop) => (
                <div
                  key={prop.title}
                  className="border border-[#65656542] rounded-lg cursor-pointer transition-shadow duration-500 ease-in-out hover:shadow-lg"
                >
                  {valueCard && <ValueCard {...prop} />}
                  {valueCard || <EventCard {...prop} />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
