import React, { useState, useRef } from "react";
import { CopyIcon, BookmarkIcon, Share2Icon, DownloadIcon } from "lucide-react";

interface ArticleCardProps {
  title: string;
  authors: string;
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  year?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  authors,
  abstract,
  publishedDate,
  doi,
  imageUrl,
  journal = "CompSci & AI Advances",
  volume = "1(4)",
  pages = "168-177",
  year = "2024",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showFullAbstract, setShowFullAbstract] = useState(false);
  const [copied, setCopied] = useState(false);
  const doiRef = useRef<HTMLDivElement>(null);

  const handleCopyDOI = () => {
    if (doiRef.current) {
      const doiText = doiRef.current.textContent;
      if (doiText) {
        navigator.clipboard
          .writeText(doiText)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch((err) => console.error("Failed to copy DOI: ", err));
      }
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 mb-6 flex flex-col md:flex-row gap-6">
      {imageUrl && (
        <div className="md:w-1/4 flex-shrink-0 flex items-start">
          <div className="relative w-full h-48 rounded-lg border border-gray-200 bg-gray-100 flex items-center justify-center">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400"></div>
              </div>
            )}
            <img
              src={imageUrl}
              alt={title}
              className={`w-full h-full object-cover rounded-lg ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                setImageLoaded(true); // Hide spinner if error
              }}
            />
          </div>
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <h3 className="font-bold text-2xl text-gray-900 mb-2 leading-tight hover:text-blue-600 transition-colors duration-150">
            {title}
          </h3>
          <div className="text-gray-700 mb-3 font-medium">{authors}</div>

          <div className="mb-4">
            <p
              className={`text-gray-600 ${
                showFullAbstract ? "" : "line-clamp-3"
              }`}
            >
              {abstract}
            </p>
            {abstract.length > 150 && (
              <button
                className="text-blue-600 text-sm font-medium mt-1 hover:text-blue-800 transition-colors duration-150"
                onClick={() => setShowFullAbstract(!showFullAbstract)}
              >
                {showFullAbstract ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
              Research Article
            </span>
            <span>Published: {publishedDate}</span>
          </div>

          <div className="text-sm text-gray-600 mb-2">
            {journal} {volume}, {pages} ({year})
          </div>

          <div className="flex items-center flex-wrap gap-2">
            <div className="flex items-center bg-gray-50 rounded-md px-2 py-1">
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm font-medium hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span ref={doiRef}>doi.org/{doi}</span>
              </a>
              <button
                onClick={handleCopyDOI}
                className="ml-2 text-gray-500 hover:text-gray-700 transition-colors duration-150"
                aria-label="Copy DOI"
              >
                <CopyIcon className="h-4 w-4" />
                {copied && (
                  <span className="text-xs text-green-600 ml-1">Copied!</span>
                )}
              </button>
            </div>

            <div className="flex space-x-2">
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors duration-150 p-1 rounded hover:bg-gray-100"
                aria-label="Bookmark"
              >
                <BookmarkIcon className="h-5 w-5" />
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors duration-150 p-1 rounded hover:bg-gray-100"
                aria-label="Share"
              >
                <Share2Icon className="h-5 w-5" />
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 transition-colors duration-150 p-1 rounded hover:bg-gray-100"
                aria-label="Download"
              >
                <DownloadIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
