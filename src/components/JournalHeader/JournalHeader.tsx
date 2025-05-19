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
  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-journal-blue mb-2">{title}</h1>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-1/4">
            <div className="border border-gray-300 p-2 bg-white">
              <img
                src={"https://aristonpubs.com/" + imagePath}
                alt="Journal Cover"
                className="w-full"
              />
            </div>
          </div>

          <div className="md:w-3/4">
            <div className="bg-white border border-gray-300 p-4 h-full">
              <h2 className="text-xl font-bold text-journal-blue mb-3">
                {subtitle}
              </h2>
              <div className="mb-4">
                <p className="text-sm">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalHeader;
