// import Header from "@/components/Header";
// import Breadcrumb from "@/components/Breadcrumb";
import JournalHeader from "@/components/JournalHeader/JournalHeader";
import Sidebar from "@/components/Sidebar/Sidebar";
import RecentArticles from "@/components/RecentArticles/RecentArticles";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
// import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import ArticleDetailPage from "@/pages/JournalPage/ArticleDetailPage";
import { useParams } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";

interface Author {
  name: string;
  affiliations: string[];
  is_corresponding: boolean;
}

interface AuthorDetails {
  authors: Author[];
  affiliations: { [key: string]: string };
  corresponding_author: { email: string; name: string } | null;
}

interface ResearchArticle {
  title: string;
  authors: string;
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl: string;
  url: string;
  significance?: string;
  summary?: string;
  author_details?: AuthorDetails;
  journal?: string | null;
  volume?: string;
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
  imagePath: string;
  volumes: Volume[];
}

const JournalPage = () => {
  // const breadcrumbItems = [
  //   { name: "Journals", href: "/journals" },
  //   { name: "CompSci & AI Advances", href: "/journals/compsci-ai-advances" },
  // ];

  const [journal, setJournal] = useState<Journal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { journalName } = useParams();

  useEffect(() => {
    const fetchJournalData = async () => {
      try {
        const response = await fetch("/mock_data/journalPage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch journal data");
        }
        const data = await response.json();
        const { journalPages } = data;
        // Find the specific journal based on the title
        const selectedJournal = journalPages.find(
          (j: Journal) => j.title.trim() === journalName
        );
        if (!selectedJournal) {
          throw new Error(`Journal with title "${journalName}" not found`);
        }
        setJournal(selectedJournal);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchJournalData();
  }, [journalName]);

  if (loading) return <LoadingSpinner />;
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
          {journal.volumes.map((volume, volumeIndex) => {
            // Group articles by article_type
            const grouped: { [type: string]: ResearchArticle[] } = {};
            volume.researchArticles.forEach((article) => {
              const type = article.article_type?.toUpperCase() || "OTHER";
              if (!grouped[type]) grouped[type] = [];
              grouped[type].push(article);
            });
            return (
              <div
                key={volumeIndex}
                className="bg-white border border-gray-300 rounded-md p-2 sm:p-4 md:p-6 max-w-full mb-8"
              >
                <div className="border-b border-gray-300 pb-3 sm:pb-4 mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-journal-blue">
                    {volume.volumeName}
                  </h2>
                </div>
                {Object.entries(grouped).map(([type, articles]) => (
                  <div key={type} className="mb-6">
                    <h3 className="text-journal-blue font-bold text-base sm:text-lg uppercase tracking-wide mb-3 pl-2 border-l-4 border-[#4F5087] bg-[#F6F8FA] py-1">
                      {type}
                    </h3>
                    {articles.map((article, index) => (
                      <ArticleCard
                        key={index}
                        title={article.title}
                        authors={article.authors}
                        abstract={article.abstract}
                        publishedDate={article.publishedDate}
                        doi={article.doi}
                        imageUrl={article.imageUrl}
                        articleId={article.title}
                        journalTitle={journal.title}
                        articleType={article.article_type}
                      />
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </main>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-64 bg-gray-100 min-h-[1px] md:min-h-screen p-2 sm:p-4 flex flex-col gap-4 md:gap-6">
        <div className="flex flex-col gap-1 mb-3">
          <a
            href="#"
            className="group relative block w-full bg-[#4F5087] text-white font-bold text-xs sm:text-sm text-center py-2 sm:py-3 rounded-none overflow-hidden transition-all duration-300 hover:bg-[#3A3B6B] hover:shadow-lg"
          >
            <span className="relative z-10">SUBMIT MANUSCRIPT</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#"
            className="group relative block w-full bg-[#4F5087] text-white font-bold text-xs sm:text-sm text-center py-2 sm:py-3 rounded-none overflow-hidden transition-all duration-300 hover:bg-[#3A3B6B] hover:shadow-lg"
          >
            <span className="relative z-10">BE A REVIEWER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>
          <a
            href="#"
            className="group relative block w-full bg-[#4F5087] text-white font-bold text-xs sm:text-sm text-center py-2 sm:py-3 rounded-none overflow-hidden transition-all duration-300 hover:bg-[#3A3B6B] hover:shadow-lg"
          >
            <span className="relative z-10">JOIN EDITORIAL BOARD</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
