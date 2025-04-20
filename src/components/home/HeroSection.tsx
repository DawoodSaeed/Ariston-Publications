import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  exploreBtnTitle: string;
}
/**
 * HeroSection component renders the hero section of the home page.
 *
 * @param {string} title - The title of the hero section.
 * @param {string} description - The description of the hero section.
 * @param {string} imageSrc - The source URL of the hero section image.
 */
export default function HeroSection({
  title,
  description,
  imageSrc,
  exploreBtnTitle,
}: HeroSectionProps) {
  return (
    <section className="relative pt-20 md:pt-24 min-h-[500px] flex items-center bg-[#F8F8F8]">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1b4b] mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-gray-600 mb-8 text-lg">{description}</p>

          <div className="flex gap-4">
            <Button
              className="text-[16px] font-normal border border-[#0401A5] bg-[#0401A5] text-white transition duration-2000"
              style={{
                width: "177.75px",
                height: "51.90999984741211px",
                top: "262px",
                borderRadius: "99px",
                borderWidth: "1px",
              }}
            >
              Explore {exploreBtnTitle}
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <img
              src={imageSrc}
              className="w-full md:w-auto md:ml-auto"
              alt="Hero"
              style={{ height: "520px", width: "465px" }}
            />
          </div>
        </div>
      </div>
      <img
        src="/images/star.svg"
        className="absolute bottom-[-40px] left-[4rem]"
        alt="Decoration"
      />
    </section>
  );
}
