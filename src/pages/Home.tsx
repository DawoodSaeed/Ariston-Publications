
import { ChevronDown } from "lucide-react";
import BookCard from "@/components/home/BookCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const popularBooks = [
  {
    title: "Nanocomposites: Advancing Materials For Modern Applications",
    author: "Ahmad Umar",
    image: "/lovable-uploads/39574a7c-2774-45b0-9625-bc633ade1dde.png",
    description: "Explore the cutting-edge world of nanocomposites and their applications in modern technology."
  },
  {
    title: "Millets And Millet Products: From Traditional Grains To Nutritional PowerHouses",
    author: "Kuldeep Kumar",
    image: "/lovable-uploads/a4afe2a5-59e3-431d-bdc0-55d6f2f1718c.png",
    description: "Discover the nutritional benefits and versatility of traditional millet grains."
  },
  {
    title: "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation And Human Health",
    author: "Ahmad Umar",
    image: "/lovable-uploads/00961519-9d28-4973-b1bb-99b514721f1f.png",
    description: "Learn about the intersection of nanotechnology and sustainable conservation."
  }
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-sm mb-4">
              <span>Home</span>
              <ChevronDown className="h-4 w-4" />
              <span>Books</span>
            </div>
            <h1 className="text-5xl font-bold text-[#1a1b4b] mb-6">Our Books</h1>
            <p className="text-gray-600 mb-8">
              Discover a diverse collection of books that inspire, educate, and empower. Whether you're looking for academic research, insightful literature, or engaging reads, our collection offers something for everyone.
            </p>
            <Button className="bg-blue-800 hover:bg-blue-700">
              Explore Books
            </Button>
          </div>
          <div className="hidden md:block">
            <img 
              src="/public/lovable-uploads/5135a55e-24ba-4a4c-aca5-7df4a0e6b718.png" 
              alt="Library" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a1b4b] mb-12">Our Popular Books</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularBooks.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1a1b4b] mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What types of books do we publish?</AccordionTrigger>
              <AccordionContent>
                We publish a wide range of academic and research books across various disciplines.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I submit my manuscript for publication?</AccordionTrigger>
              <AccordionContent>
                You can submit your manuscript through our online submission system or contact our editorial team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do We offer editorial and marketing support?</AccordionTrigger>
              <AccordionContent>
                Yes, we provide comprehensive editorial and marketing support for all our publications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is Ariston Publications open to emerging authors?</AccordionTrigger>
              <AccordionContent>
                Yes, we welcome submissions from emerging authors and provide necessary guidance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Where can I purchase books published by Ariston Publications?</AccordionTrigger>
              <AccordionContent>
                Our books are available through our online store and major book retailers.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#1a1b4b] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl bg-[#1a1b4b] p-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">Subscribe To Get Information,</h2>
              <h2 className="text-3xl font-bold mb-4">Latest News And Other Interesting Events!</h2>
            </div>
            <div className="flex w-full md:w-auto gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg text-black"
              />
              <Button className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
