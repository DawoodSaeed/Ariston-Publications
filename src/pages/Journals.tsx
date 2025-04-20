import HeroSection from "@/components/home/HeroSection";
import SectionBadge from "@/components/ui/section-badge";

const JOURNALS = [
  "https://www.figma.com/file/NPF6u9HNK4DLth18CB0QoH/image/5cf6ed39d60f83ac670e66b3ad8193e385a015ff",
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

      <section className="py-[140px] container mx-auto px-4 md:px-8 lg:px-16">
        <SectionBadge title="Our Journals" />
        <h2 className="text-2xl font-bold text-[#0B0C58] ">
          Our Popular Journals
        </h2>
      </section>
    </div>
  );
};

export default Journals;
