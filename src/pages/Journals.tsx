import BooksSection from "@/components/home/BooksSection";
import HeroSection from "@/components/home/HeroSection";
const journalBooks = [
  {
    id: 1,
    title: "CompSci & AI Advances",
    author: "Multidisciplinary Journal",
    image:
      "https://aristonpubs.com/wp-content/uploads/2024/11/Cover-page-Comp-and-AI-v4.jpg",
    description:
      "Explore the cutting-edge world of computer science and artificial intelligence.",
  },
  {
    id: 2,
    title: "Biomedicine and Biotechnology",
    author: "Advances in Biomedical Research",
    image:
      "https://aristonpubs.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-16-at-6.57.38-AM.jpeg",
    description:
      "Discover the latest advancements in biomedical research and its applications.",
  },
  {
    id: 3,
    title: "Chemical Science and Technology",
    author: "Advances in Chemical Research",
    image:
      "https://aristonpubs.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-16-at-6.57.38-AM.jpeg",
    description:
      "Learn about the latest developments in chemical science and technology.",
  },
];

const Journals = () => {
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
        books={journalBooks}
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
