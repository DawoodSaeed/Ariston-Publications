// import Header from "@/components/Header";
// import Breadcrumb from "@/components/Breadcrumb";
import JournalHeader from "@/components/JournalHeader/JournalHeader";
import Sidebar from "@/components/Sidebar/Sidebar";
import RecentArticles from "@/components/RecentArticles/RecentArticles";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
// import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface ResearchArticle {
  title: string;
  authors: string;
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl: string;
}

interface Volume {
  volumeName: string;
  researchArticles: ResearchArticle[];
}

interface Journal {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  volumes: Volume[];
}

const JournalPage = () => {
  const { journalName } = useParams<{ journalName: string }>();
  // const breadcrumbItems = [
  //   { name: "Journals", href: "/journals" },
  //   { name: "CompSci & AI Advances", href: "/journals/compsci-ai-advances" },
  // ];

  const [journal, setJournal] = useState<Journal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    alert(journalName);
    const fetchJournalData = async () => {
      try {
        const response = await fetch("/mock_data/journalPage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch journal data");
        }
        const data = await response.json();
        // Find the journal that matches the URL parameter
        const foundJournal = data.journalPage.find(
          (j: Journal) =>
            j.title.toLowerCase().replace(/\s+/g, "-") === journalName
        );

        if (!foundJournal) {
          throw new Error("Journal not found");
        }

        setJournal(foundJournal);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    if (journalName) {
      fetchJournalData();
    }
  }, [journalName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!journal) return <div>No journal data found</div>;

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Sidebar */}
      <div className="w-full md:w-64 min-h-[1px] md:min-h-screen text-white">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-2 sm:px-4 md:px-8">
        <JournalHeader
          title={journal.title}
          subtitle={journal.subtitle}
          description={journal.description}
          imagePath={journal.imagePath}
        />
        <main className="py-4 sm:py-6">
          {journal.volumes.map((volume, volumeIndex) => (
            <div
              key={volumeIndex}
              className="bg-white border border-gray-300 rounded-md p-2 sm:p-4 md:p-6 max-w-full mb-8"
            >
              <div className="border-b border-gray-300 pb-3 sm:pb-4 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-bold text-journal-blue">
                  Research Articles
                </h2>
                <span className="text-xs sm:text-sm text-gray-600">
                  {volume.volumeName}
                </span>
              </div>
              {volume.researchArticles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  authors={article.authors}
                  abstract={article.abstract}
                  publishedDate={article.publishedDate}
                  doi={article.doi}
                  imageUrl={article.imageUrl}
                />
              ))}
            </div>
          ))}
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-64 bg-gray-100 min-h-[1px] md:min-h-screen p-2 sm:p-4 flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-1 mb-3">
          <a
            href="#"
            className="block w-full bg-[#4F5087] text-white font-bold text-xs sm:text-sm text-center py-2 sm:py-3 rounded-none"
          >
            SUBMIT MANUSCRIPT
          </a>
          <a
            href="#"
            className="block w-full bg-[#4F5087] text-white font-bold text-xs sm:text-sm text-center py-2 sm:py-3 rounded-none"
          >
            BE A REVIEWER
          </a>
          <a
            href="#"
            className="block w-full bg-[#4F5087] text-white font-bold text-xs sm:text-sm text-center py-2 sm:py-3 rounded-none"
          >
            JOIN EDITORIAL BOARD
          </a>
        </div>
        <RecentArticles />
        <div className="border border-gray-300 bg-white rounded-md p-2 sm:p-4">
          <h3 className="text-journal-blue font-bold text-base mb-2 sm:mb-4">
            Featured Special Issue
          </h3>
          <img
            src="https://via.placeholder.com/300x150?text=Edge+Computing+Special+Issue"
            alt="Special Issue"
            className="w-full mb-2 sm:mb-3"
          />
          <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">
            Edge Computing: AI Applications, Implementations, and Security
            Challenges
          </h4>
          <p className="text-xs text-gray-600 mb-1 sm:mb-2">
            Submission deadline: September 30, 2024
          </p>
          <a
            href="/special-issues/edge-computing"
            className="text-xs text-journal-blue hover:underline"
          >
            Read more about this special issue →
          </a>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;
