import BooksSection from "@/components/home/BooksSection";
import HeroSection from "@/components/home/HeroSection";
import { useEffect, useState } from "react";

interface Journal {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
}

// for the mocked api response journal.
interface ResearchArticle {
  title: string;
  authors: string;
  abstract: string;
  publishedDate: string;
  doi: string;
  imageUrl: string | null;
}

interface Volume {
  volumeName: string;
  researchArticles: ResearchArticle[];
}

interface JournalData {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  volumes: Volume[];
}

const Journals = () => {
  const [journals, setJournals] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJournals = async () => {
      try {
        const response = await fetch("/mock_data/journalPage.json");
        if (!response.ok) {
          throw new Error("Failed to fetch journal data");
        }
        const data = await response.json();
        const { journalPages } = data;

        let newJournals: Journal[] = [];
        newJournals = journalPages.map((journal: JournalData) => {
          return {
            ...journal,
            image: "https://aristonpubs.com/" + journal.imagePath,
            author: journal.volumes[0].researchArticles[0].authors.slice(0, 20),
            description: journal.description,
          };
        });
        setJournals(newJournals);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchJournals();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Journals"
        description="Explore a wide range of scholarly and industry-leading journals designed to inform, inspire, and advance knowledge. From research publications to expert insights, our journals cater to professionals, academics, and enthusiasts alike."
        imageSrc="/images/hero_section.svg"
        exploreBtnTitle="Journals"
      />

      {/* Journals Section */}
      <BooksSection
        books={journals}
        title="Our Journals"
        sectionBadgeTitle="OUR JOURNALS"
        description="Ariston Publications is a premier publisher of high-impact journals spanning Science, Engineering, Medicine, Computer Science, Artificial Intelligence, Materials Science, Chemical Science, Energy, and Environment. Committed to excellence, we uphold rigorous peer review and open-access dissemination. Explore our distinguished journal portfolio for cutting-edge research."
        onViewMore={() => {}}
        background="white"
        viewMoreBtn={false}
      />
    </div>
  );
};

export default Journals;
