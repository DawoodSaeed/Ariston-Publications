import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface JournalHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
}

const JournalHeader: React.FC<JournalHeaderProps> = ({
  title,
  subtitle,
  description,
  imagePath,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowReadMore = description.length > 500;
  const displayText = isExpanded
    ? description
    : description.slice(0, 500) + "...";

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-journal-blue mb-2">{title}</h1>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-1/4">
            <div className="border border-gray-300 p-2 bg-white">
              <img src={imagePath} alt="Journal Cover" className="w-full" />
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="bg-white border border-gray-300 p-4 h-full">
              <h2 className="text-xl font-bold text-journal-blue mb-3">
                {subtitle}
              </h2>
              <div className="mb-4">
                <p className="text-sm">{displayText}</p>
                {shouldShowReadMore && (
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 border-2 border-journal-blue text-journal-blue px-4 py-2 rounded-md hover:bg-journal-blue transition-all duration-200 mt-3 text-sm font-medium [&:hover]:text-grey"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>

              {/* <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p>
                    <strong>ISSN:</strong> 2083-8794
                  </p>
                  <p>
                    <strong>CODEN:</strong> CSAIAV
                  </p>
                  <p>
                    <strong>First Published:</strong> January 2024
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Editorial Board:</strong>{" "}
                    <a
                      href="/editorial-board"
                      className="text-journal-blue hover:underline"
                    >
                      View Editorial Board
                    </a>
                  </p>
                  <p>
                    <strong>Impact Factor:</strong> 3.781 (2023)
                  </p>
                  <p>
                    <strong>5-Year Impact Factor:</strong> 4.128
                  </p>
                </div>
              </div> */}

              {/* <div className="flex flex-wrap gap-2 mt-4">
                <button className="bg-journal-blue text-white px-3 py-1 text-sm rounded hover:bg-journal-navydark">
                  Submit Manuscript
                </button>
                <button className="bg-journal-blue text-white px-3 py-1 text-sm rounded hover:bg-journal-navydark">
                  Guide for Authors
                </button>
                <button className="bg-journal-blue text-white px-3 py-1 text-sm rounded hover:bg-journal-navydark">
                  Track Your Paper
                </button>
                <button className="bg-journal-blue text-white px-3 py-1 text-sm rounded hover:bg-journal-navydark">
                  Open Access Options
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalHeader;
