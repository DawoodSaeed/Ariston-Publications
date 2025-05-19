import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DownloadIcon } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner"; // Import LoadingSpinner

// Helper function to create a slug from a string (duplicate of the one in ArticleCard.tsx for now)
const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

// Updated Article type definition based on journalPage.json structure
interface AuthorDetail {
  name: string;
  affiliations: string[];
  is_corresponding: boolean;
}

interface AffiliationMap {
  [key: string]: string;
}

interface AuthorDetails {
  authors: AuthorDetail[];
  affiliations: AffiliationMap;
  corresponding_author: { email: string; name: string } | null;
}

interface ResearchArticle {
  title: string;
  authors: string; // Keep this for display in cards/list view if needed, but use author_details for detailed view
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl: string; // This seems to be article-specific image in JSON, might need adjustment or clarification
  url: string;
  significance?: string;
  summary?: string;
  author_details?: AuthorDetails;
  journal?: string | null; // This is the journal title in the JSON structure
  volume?: string; // This is the volume name in the JSON structure
  issue?: string;
  pages?: string;
  article_type: string;
  submitted_date?: string;
  revised_date?: string;
  accepted_date?: string;
  citation?: string;
}

interface Volume {
  volumeName: string;
  researchArticles: ResearchArticle[];
}

interface Journal {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string; // This is the journal cover image path in the JSON structure
  volumes: Volume[];
}

const ArticleDetailPage = () => {
  const [article, setArticle] = useState<ResearchArticle | null>(null);
  const [journal, setJournal] = useState<Journal | null>(null); // State to hold journal info for cover/name
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { journalName, articleId } = useParams<{
    journalName: string;
    articleId: string;
  }>(); // Get both journalName and articleId
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticleData = async () => {
      try {
        const response = await fetch("/mock_data/journalPage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch journal data");
        }
        const data = await response.json();
        const { journalPages } = data;

        // Find the specific journal
        const selectedJournal = journalPages.find(
          (j: Journal) => slugify(j.title) === journalName // Match slugified journal title from JSON with journalName slug from URL
        );

        if (!selectedJournal) {
          setError(`Journal with title "${journalName}" not found`);
          setLoading(false);
          return;
        }

        setJournal(selectedJournal); // Set journal state

        // Find the specific article within the journal's volumes
        let foundArticle: ResearchArticle | null = null;
        for (const volume of selectedJournal.volumes) {
          foundArticle = volume.researchArticles.find(
            (article: ResearchArticle) => slugify(article.title) === articleId // Match slugified article title from JSON with articleId slug from URL
          );
          if (foundArticle) {
            break; // Stop searching once article is found
          }
        }

        if (!foundArticle) {
          setError(
            `Article with title "${articleId}" not found in journal "${journalName}"`
          );
          setLoading(false);
          return;
        }

        setArticle(foundArticle);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    if (journalName && articleId) {
      fetchArticleData();
    } else {
      setError("Journal name or article ID missing from URL");
      setLoading(false);
    }
  }, [journalName, articleId]); // Depend on journalName and articleId

  // Helper to format author list
  const formatAuthors = (authors: AuthorDetail[]) => {
    return authors
      .map((author) => {
        let display = author.name;
        if (author.affiliations && author.affiliations.length > 0) {
          display += author.affiliations.join(", "); // Join affiliation numbers
        }
        if (author.is_corresponding) {
          display += " (Corresponding Author)"; // Indicate corresponding author
        }
        return display;
      })
      .join(", "); // Join author strings
  };

  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="py-20 text-center text-red-600">Error: {error}</div>;
  if (!article || !journal)
    return (
      <div className="py-20 text-center">
        Article or Journal data not found.
      </div>
    );

  const handleDownload = () => {
    // Replace with actual download logic or use the pdfUrl from data
    if (article.url) {
      // Assuming 'url' field in JSON might be the PDF link or article page
      window.open(article.url, "_blank");
    } else {
      console.log("PDF URL not available");
      // Implement a fallback or show a message
    }
  };

  const handleRequestPermission = () => {
    // Replace with actual request permission logic
    console.log("Requesting permission");
  };

  return (
    <div className="bg-[#F8F9FB] min-h-screen w-full flex flex-col items-center py-8 px-2 md:px-0">
      <div className="w-full max-w-5xl">
        {/* Journal Info */}
        <div className="flex flex-col md:flex-row mb-6 border border-gray-300 rounded-md overflow-hidden">
          {/* Journal Cover */}
          {journal.imagePath && (
            <div className="flex-shrink-0 w-32 h-36 bg-gray-100 flex items-center justify-center">
              <img
                src={"https://aristonpubs.com/" + journal.imagePath} // Use journal cover image
                alt="Journal Cover"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          {/* Journal Title and Info */}
          <div className="flex-grow flex flex-col">
            <div className="bg-gray-200 p-4 flex-grow">
              <div className="text-sm text-gray-700 font-medium mb-1">
                From the Journal
              </div>
              <div className="text-2xl font-bold text-[#222357]">
                {journal.title} {/* Use journal title */}
              </div>
            </div>
            {/* Dark blue bar for Volume and Issue */}
            <div className="bg-[#222357] text-white p-4 text-base font-medium">
              {/* Display volume and issue if available in article data */}
              {(article.volume || article.issue) &&
                `Volume ${article.volume || "N/A"}, Issue ${
                  article.issue || "N/A"
                } (${
                  article.publishedDate
                    ? new Date(article.publishedDate).getFullYear()
                    : "N/A"
                })`}
            </div>
          </div>
        </div>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-[#222357] mb-4 leading-snug">
          {article.title}
        </h1>
        {/* Authors and Affiliations Section */}
        {article.author_details && (
          <div className="mb-6">
            <Tabs defaultValue="authors" className="w-full">
              <TabsList>
                <TabsTrigger value="authors">Authors</TabsTrigger>
                <TabsTrigger value="affiliations">
                  Authors and Affiliations
                </TabsTrigger>
              </TabsList>
              <TabsContent value="authors">
                <div className="p-4 border border-gray-200 rounded-b-md bg-white text-base text-gray-800 leading-relaxed">
                  <div className="font-bold text-lg mb-3 text-[#222357]">
                    Authors
                  </div>
                  {/* Use the formatAuthors helper function */}
                  {formatAuthors(article.author_details.authors)}
                </div>
              </TabsContent>
              <TabsContent value="affiliations">
                {article.author_details && ( // Check again for safety
                  <div className="p-4 border border-gray-200 rounded-b-md bg-white text-base text-gray-800 leading-relaxed">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Authors List (Left Column) */}
                      <div className="w-full md:w-1/3 flex-shrink-0">
                        <div className="font-bold text-lg mb-3 text-[#222357]">
                          Authors
                        </div>
                        <ul className="list-none p-0 m-0 space-y-1">
                          {article.author_details.authors.map(
                            (author, index) => (
                              <li key={index} className="text-gray-800">
                                <span className="font-medium">
                                  {author.name}
                                </span>
                                {author.affiliations.map((aff, affIndex) => (
                                  <sup
                                    key={affIndex}
                                    className="ml-0.5 text-xs"
                                  >
                                    {aff}
                                  </sup>
                                ))}
                                {author.is_corresponding && (
                                  <span className="ml-1 text-xs">*</span>
                                )}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      {/* Affiliations List (Right Column) */}
                      <div className="w-full md:w-2/3 flex-grow">
                        <div className="font-bold text-lg mb-3 text-[#222357]">
                          Authors and Affiliations
                        </div>
                        <ul className="list-none p-0 m-0 space-y-2 text-gray-700 text-sm">
                          {Object.entries(
                            article.author_details.affiliations
                          ).map(([key, value]) => (
                            <li key={key}>
                              <sup>{key}</sup> {value}
                            </li>
                          ))}
                          {/* Display Corresponding Author Info */}
                          {article.author_details.corresponding_author
                            ?.email && (
                            <li className="mt-4 pt-3 border-t border-gray-200">
                              <div className="font-semibold">
                                *Author to whom correspondence should be
                                addressed:
                              </div>
                              <div className="text-blue-700 underline break-words mt-1">
                                {
                                  article.author_details.corresponding_author
                                    .email
                                }{" "}
                                (
                                {
                                  article.author_details.corresponding_author
                                    .name
                                }
                                )
                              </div>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* Main Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Abstract, Chart, Significance, Summary */}
          <div className="flex-1">
            {/* Abstract */}
            <div className="mb-6">
              <div className="font-bold text-lg mb-2">ABSTRACT</div>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {article.abstract}
              </div>
            </div>
            {/* Chart - Keeping placeholder */}
            <div className="mb-6">
              <img
                src={article.imageUrl} // Use the actual article image from JSON
                alt={article.title + "image"}
                className="w-full max-w-md mx-auto"
              />
            </div>
            {/* Significance */}
            {article.significance && ( // Conditionally render if significance exists
              <div className="mb-4">
                <div className="font-bold mb-1">Significance of the Study:</div>
                <div className="text-gray-700 whitespace-pre-line">
                  {article.significance}
                </div>
              </div>
            )}
            {/* Summary */}
            {article.summary && ( // Conditionally render if summary exists
              <div className="mb-4">
                <div className="font-bold mb-1">Summary of the Study:</div>
                <div className="text-gray-700 whitespace-pre-line">
                  {article.summary}
                </div>
              </div>
            )}
          </div>
          {/* Right: Article Info Card and Actions */}
          <div className="w-full lg:w-80 flex-shrink-0">
            {/* Download PDF Button */}
            {article.url && ( // Conditionally render download button if url exists
              <Button
                asChild
                className="w-full mb-4 text-base font-semibold py-2 rounded-full bg-[#222357] hover:bg-[#3536a5]"
              >
                <a
                  href={article.url} // Use article.url for download/view
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadIcon className="mr-2" /> Download PDF
                </a>
              </Button>
            )}
            {/* Article Info, Citation, Request Permission Card */}
            <Card className="mb-4">
              <CardHeader className="pb-2">
                <div className="font-bold text-base">Article Information</div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {article.article_type && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Article type:</span>{" "}
                    {article.article_type}
                  </div>
                )}
                {article.submitted_date && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Submitted:</span>{" "}
                    {article.submitted_date}
                  </div>
                )}
                {article.revised_date && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Revised:</span>{" "}
                    {article.revised_date}
                  </div>
                )}
                {article.accepted_date && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Accepted:</span>{" "}
                    {article.accepted_date}
                  </div>
                )}
                {article.publishedDate && ( // Conditionally render
                  <div>
                    <span className="font-semibold">First published:</span>{" "}
                    {article.publishedDate}
                  </div>
                )}
                {article.doi && ( // Conditionally render
                  <div>
                    <span className="font-semibold">DOI:</span>{" "}
                    <a
                      href={article.doi}
                      className="text-blue-700 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {article.doi}
                    </a>
                  </div>
                )}
                {article.volume && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Volume:</span>{" "}
                    {article.volume}
                  </div>
                )}
                {article.issue && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Issue:</span>{" "}
                    {article.issue}
                  </div>
                )}
                {article.pages && ( // Conditionally render
                  <div>
                    <span className="font-semibold">Pages:</span>{" "}
                    {article.pages}
                  </div>
                )}
                {/* Citation */}
                {article.citation && ( // Conditionally render citation
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <span className="font-semibold">Citation:</span>{" "}
                    <div className="text-xs text-gray-700 whitespace-pre-line mt-1">
                      {article.citation}
                    </div>
                  </div>
                )}
                {/* Request Permission */}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="font-semibold">Request Permission:</span>{" "}
                  <a
                    href="#" // Placeholder for request permission link
                    className="text-blue-700 underline"
                    onClick={(e) => handleRequestPermission()}
                  >
                    Request Permission
                  </a>
                </div>
              </CardContent>
            </Card>
            {/* Share Section */}
            <div className="flex items-center justify-start gap-4 py-4 border-t border-gray-300">
              <div className="font-bold text-base">Share</div>
              <div className="flex gap-3">
                {/* Placeholder Social Media Icons */}
                <a
                  href="#"
                  aria-label="Share on Facebook"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.713v1.188h2.017l-.306 1.917h-1.711v5.582h-2.108v-5.582h-1.141v-1.917h1.141v-1.583c0-1.137.569-1.754 1.932-1.754h1.47z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Share on Twitter"
                  className="text-gray-600 hover:text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.188 3.091-2.075 6.547-6.703 6.547-1.628 0-3.15-.478-4.44-1.305.159 1.783.95 3.502 2.387 4.742 0 0-2.915-.958-4.257-1.188 0 0 .485 1.741 1.851 2.646 0 0-1.723-.049-3.34-.913 0 0 .249 1.531 2.172 2.405 0 0-2.091 1.15-4.241 1.15-1.405 0-2.721-.205-3.953-.639.089 2.333 1.75 4.084 4.573 4.681 0 0-2.337.551-4.516.156 0 0 2.563 1.609 5.963 1.609 6.702 0 10.324-5.527 10.324-10.325 0-.159-.011-.317-.028-.475 0 0 1.092-.792 1.596-1.725 0 0-.985.309-2.17.592 0 0 .101-.788.486-1.561z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Share on LinkedIn"
                  className="text-gray-600 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8h-3v9h3v-9zm-1.447-2.37c-.79 0-1.43-.64-1.43-1.43s.64-1.43 1.43-1.43 1.43.64 1.43 1.43-.639 1.43-1.43 1.43zm7.447 2.37h-2.956v-.5c1.052-1.187 2.781-2.443 4.03-2.443 2.687 0 4.009 1.731 4.009 4.591v5.352h-3v-8.265c0-1.783-1.03-2.719-2.009-2.719-.985 0-1.394.665-1.394 1.707v7.277h-3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Share on Instagram"
                  className="text-gray-600 hover:text-pink-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2c3.309 0 3.699-.01 4.982-.072 1.102-.056 1.803-.222 2.415-.461.616-.242 1.102-.527 1.555-.98.457-.454.742-.94 98-1.556.24-.611.405-1.313.461-2.413.062-1.281.072-1.67.072-4.982s-.01-3.699-.072-4.982c-.056-1.102-.222-1.803-.461-2.415-.242-.616-.527-1.102-.98-1.555-.454-.457-.94-.742-1.556-.98-.611-.24 1.313-.405 2.413-.461c1.281-.062 1.67-.072 4.982-.072zm0 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.5-6.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;
