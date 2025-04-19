import { ChevronDown, ArrowRight } from "lucide-react";
import BookCard from "@/components/home/BookCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import BooksSection from "@/components/home/BooksSection";

const popularBooks = [
  {
    title: "Nanocomposites: Advancing Materials For Modern Applications",
    author: "Ahmad Umar",
    image:
      "https://s3-alpha-sig.figma.com/img/0ef1/1cd5/5badfdb4a3225ea78e2bfaae127751f9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLOgoC5RiUstXCXhZLOLknnrJd1uoiNB0yhzAjqYrjz8hQr7jqQuvbIsy~B~xJ1lS4gi94QvVGgmPgoZCevfp2unC0h4QE8xneNxxAviX4p21n8FGyO7nsaA--SUM7fCsVl2m8jKz7NK56bOUAgzfIhFyUQj2ohZTmYhkzfOWS8B6GDsjHamC4q2tYSloKkbLGzWL7-SsdhMmhZ~qiQATGMEkFIsvdkILvsymexCLrsleGezQwmIS7i~huNeSr1lC6bV58CvrFIVpImQCTwJjTNyUQj-yJWIcC12FDtJa9UVExRTvgPClhbCfDMklazol3HvBdrbrhKymu7iCudS3w__",
    description:
      "Explore the cutting-edge world of nanocomposites and their applications in modern technology.",
  },
  {
    title:
      "Millets And Millet Products: From Traditional Grains To Nutritional PowerHouses",
    author: "Kuldeep Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/ea0b/dbc6/ae5111a68b47a602892a050862c67d85?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XJcfBhYbFAkPCUUG1P1ovlb84t~o0SlfGpuFnUyACSCEdYErfZkUvOACjr~u3XGHrY8fwOs2xMEFNVeCbmhrvBQjSJQb44rZB8swFC~jD6xtQH3xC0a4aHc8SkeMebZkfMPa0J7QukODCp8KO6Sp7~OfShaskYE0uYCUUH-bIdl3dU0-DMxIq9CGaECDUqVza95RYOBAdLY6HzXdgG9zr8WI67MwSq3IpfywlqIzAMlL-DTN5kllO~EV209IeAjjdz3h24nGtXLebBvILpSyW2XEz95A3NayaKZZbsJPEW9EM4m7Fvix3N4WpNjL3CDNuPD3F5gtTNpMgSfARz2eWA__",
    description:
      "Discover the nutritional benefits and versatility of traditional millet grains.",
  },
  {
    title:
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation And Human Health",
    author: "Ahmad Umar",
    image:
      "https://s3-alpha-sig.figma.com/img/879f/2f57/535860765c1325ea9535dbedc35f3c9a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvDdtM~eoyk9MOgjpHaKJVwzD9VKrAAkffxRqoFpkJICbg3-tpTa3VVTxmsWbLaFxgdY84IDnnnCtLKY1D1hzQPpWOBuk-3i946socsbvfad2fxJR7rSY79voldL6x8SNlBGf7Mq7SjeuP3-NVMgsVa2xHAzkUYBcND95eY3AjzuIDql4sy2py6-TiOiIXA52z0LgjA4DNamQLTMiu2RsBn2UYtWkvNVmJ7GTmUZ1XdV1aJljGEz6KioQDssfqFjI6So4CccwDw02OUIZ~keR4y~CzShZZ0U7V0UL1tO~Lvl8--qfPWBK2KN7NvzTPMT6vmxreqL~RFDxZjCXUkjbQ__",
    description:
      "Learn about the intersection of nanotechnology and sustainable conservation.",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 min-h-[500px] flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1b4b] mb-6">
              Publish With Us <br />
              Your Research Work
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Discover a diverse collection of books that inspire, educate, and
              empower. Whether you're looking for academic research, insightful
              literature, or engaging reads, our collection offers something for
              everyone.
            </p>
            <div className="flex gap-4">
              <Button className="bg-blue-800 hover:bg-blue-700">
                Explore Books
              </Button>
              <Button variant="outline">Submit Manuscript</Button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="/images/header_img.svg"
              className="w-full md:w-auto md:ml-auto"
              alt="Header Image"
              style={{ height: "520px", width: "465px" }}
            />
          </div>
        </div>
        <img
          src="/images/star.svg"
          className="absolute bottom-[-40px] left-[4rem]"
        />
      </section>

      {/* Popular Books Section */}
      <BooksSection
        books={popularBooks}
        title="Our Books"
        description="Ariston Publications offers a diverse collection of high-quality books spanning various disciplines, including Science, Engineering, Medicine, Artificial Intelligence, Materials Science, and more. Our publications are meticulously curated to support researchers, academics, and professionals in advancing knowledge and fostering innovation. We welcome authors to contribute groundbreaking works that shape the future of scientific and academic discourse."
        onViewMore={() => {}}
      />

      {/* FAQ Section */}
      <section className="container mx-auto py-12 md:py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1b4b] mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What types of books do we publish?
              </AccordionTrigger>
              <AccordionContent>
                We publish a wide range of academic and research books across
                various disciplines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I submit my manuscript for publication?
              </AccordionTrigger>
              <AccordionContent>
                You can submit your manuscript through our online submission
                system or contact our editorial team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do We offer editorial and marketing support?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we provide comprehensive editorial and marketing support
                for all our publications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is Ariston Publications open to emerging authors?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we welcome submissions from emerging authors and provide
                necessary guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Where can I purchase books published by Ariston Publications?
              </AccordionTrigger>
              <AccordionContent>
                Our books are available through our online store and major book
                retailers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#1a1b4b] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl bg-[#1a1b4b] p-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">
                Subscribe To Get Information,
              </h2>
              <h2 className="text-3xl font-bold mb-4">
                Latest News And Other Interesting Events!
              </h2>
            </div>
            <div className="flex w-full md:w-auto gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg text-black"
              />
              <Button className="whitespace-nowrap">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
