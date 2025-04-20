import { Button } from "@/components/ui/button";
import BooksSection from "@/components/home/BooksSection";
import ValuePropositions from "@/components/home/ValuePropositions";
import RecentArticles, { Article } from "@/components/home/RecentArticles";
import NewsletterSubscribeCard from "@/components/home/Newsletter";
import HeroSection from "@/components/home/HeroSection";

const valuePropositionsData = {
  welcomeTitle: "Welcome To\nAriston Publications",
  welcomeDescription: `Ariston Publications is committed to advancing the frontiers of knowledge through high-quality scientific publishing. Our mission is to provide a robust platform for researchers, scholars, and academics to share their discoveries and contribute meaningfully to the global scientific community.
With a steadfast dedication to excellence, integrity, and innovation, Ariston Publications aims to be a trusted partner for researchers worldwide. We support the global research ecosystem by fostering the dissemination of groundbreaking studies, ensuring accessibility, inclusivity, and impact.
Our publishing scope is dynamic and interdisciplinary, reflecting the evolving nature of scientific inquiry. We welcome contributions from all fields that drive intellectual progress, foster collaboration, and expand the boundaries of human understanding.`,
  valuePropositions: [
    {
      icon: (
        <img src="/images/home-section-valuepropotion/atom.svg" alt="Atom" />
      ),
      title: "Empowering Discovery:",
      description:
        "Ariston Publications is dedicated to fostering groundbreaking research across diverse disciplines.",
    },
    {
      icon: (
        <img
          src="/images/home-section-valuepropotion/computer.svg"
          alt="Computer"
        />
      ),

      title: "Inspiring Innovation:",
      description:
        "We champion pioneering ideas that shape the future of science, engineering, medicine, & technology.",
    },
    {
      icon: (
        <img
          src="images/home-section-valuepropotion/worldwide.svg"
          alt="Worldwide"
        />
      ),

      title: "Uniting Scholars:",
      description:
        "Collaboration is the cornerstone of progress. Ariston Publications facilitates meaningful exchanges between researchers and academics worldwide.",
    },
    {
      icon: (
        <img
          src="images/home-section-valuepropotion/magnifying-glass.svg"
          alt="Magnifying Glass"
        />
      ),
      title: "Fostering Interdisciplinary Collaboration:",
      description:
        "Ariston Publications bridges the gap between disciplines, encouraging the exchange of ideas and knowledge across fields.",
    },
  ],
};

const recentEventData = {
  welcomeTitle: "Latest Events And News",
  welcomeDescription: `Journals For scientists, engineers, and industry R&D personnel engaged in the development, engineering scale-up and next-generation education in academics.`,
  valuePropositions: [
    {
      title:
        "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚...",
      date: "May 10, 2025",
      description:
        "A gathering of top innovators to showcase the latest in tech trends.",
      icon: (
        <img src="/images/home-section-valuepropotion/atom.svg" alt="Atom" />
      ),
      link: "#",
    },
    {
      title:
        "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚...",
      date: "June 1, 2025",
      description:
        "An international event addressing global economic challenges.",
      icon: (
        <img src="/images/home-section-valuepropotion/atom.svg" alt="Atom" />
      ),
      link: "#",
    },
    {
      title:
        "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚...",
      date: "July 18, 2025",
      description:
        "Discussions around ethical implications of AI advancements.",
      icon: (
        <img src="/images/home-section-valuepropotion/atom.svg" alt="Atom" />
      ),
      link: "#",
    },
  ],
};

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
  {
    title:
      "Advances in Biotechnology: Applications in Medicine and Agriculture",
    author: "Rajesh Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/0ef1/1cd5/5badfdb4a3225ea78e2bfaae127751f9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLOgoC5RiUstXCXhZLOLknnrJd1uoiNB0yhzAjqYrjz8hQr7jqQuvbIsy~B~xJ1lS4gi94QvVGgmPgoZCevfp2unC0h4QE8xneNxxAviX4p21n8FGyO7nsaA--SUM7fCsVl2m8jKz7NK56bOUAgzfIhFyUQj2ohZTmYhkzfOWS8B6GDsjHamC4q2tYSloKkbLGzWL7-SsdhMmhZ~qiQATGMEkFIsvdkILvsymexCLrsleGezQwmIS7i~huNeSr1lC6bV58CvrFIVpImQCTwJjTNyUQj-yJWIcC12FDtJa9UVExRTvgPClhbCfDMklazol3HvBdrbrhKymu7iCudS3w__",
    description:
      "Explore the latest advancements in biotechnology and their impact on medicine and agriculture.",
  },
  {
    title:
      "Materials Science and Engineering: Emerging Trends and Applications",
    author: "Suresh Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/ea0b/dbc6/ae5111a68b47a602892a050862c67d85?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XJcfBhYbFAkPCUUG1P1ovlb84t~o0SlfGpuFnUyACSCEdYErfZkUvOACjr~u3XGHrY8fwOs2xMEFNVeCbmhrvBQjSJQb44rZB8swFC~jD6xtQH3xC0a4aHc8SkeMebZkfMPa0J7QukODCp8KO6Sp7~OfShaskYE0uYCUUH-bIdl3dU0-DMxIq9CGaECDUqVza95RYOBAdLY6HzXdgG9zr8WI67MwSq3IpfywlqIzAMlL-DTN5kllO~EV209IeAjjdz3h24nGtXLebBvILpSyW2XEz95A3NayaKZZbsJPEW9EM4m7Fvix3N4WpNjL3CDNuPD3F5gtTNpMgSfARz2eWA__",
    description:
      "Discover the latest developments in materials science and their applications across various industries.",
  },
  {
    title:
      "Artificial Intelligence in Healthcare: Current Trends and Future Directions",
    author: "Anil Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/879f/2f57/535860765c1325ea9535dbedc35f3c9a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvDdtM~eoyk9MOgjpHaKJVwzD9VKrAAkffxRqoFpkJICbg3-tpTa3VVTxmsWbLaFxgdY84IDnnnCtLKY1D1hzQPpWOBuk-3i946socsbvfad2fxJR7rSY79voldL6x8SNlBGf7Mq7SjeuP3-NVMgsVa2xHAzkUYBcND95eY3AjzuIDql4sy2py6-TiOiIXA52z0LgjA4DNamQLTMiu2RsBn2UYtWkvNVmJ7GTmUZ1XdV1aJljGEz6KioQDssfqFjI6So4CccwDw02OUIZ~keR4y~CzShZZ0U7V0UL1tO~Lvl8--qfPWBK2KN7NvzTPMT6vmxreqL~RFDxZjCXUkjbQ__",
    description:
      "Explore the current state and future possibilities of artificial intelligence in healthcare.",
  },
  {
    title: "Environmental Sustainability: Challenges and Opportunities",
    author: "Rajiv Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/0ef1/1cd5/5badfdb4a3225ea78e2bfaae127751f9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLOgoC5RiUstXCXhZLOLknnrJd1uoiNB0yhzAjqYrjz8hQr7jqQuvbIsy~B~xJ1lS4gi94QvVGgmPgoZCevfp2unC0h4QE8xneNxxAviX4p21n8FGyO7nsaA--SUM7fCsVl2m8jKz7NK56bOUAgzfIhFyUQj2ohZTmYhkzfOWS8B6GDsjHamC4q2tYSloKkbLGzWL7-SsdhMmhZ~qiQATGMEkFIsvdkILvsymexCLrsleGezQwmIS7i~huNeSr1lC6bV58CvrFIVpImQCTwJjTNyUQj-yJWIcC12FDtJa9UVExRTvgPClhbCfDMklazol3HvBdrbrhKymu7iCudS3w__",
    description:
      "Delve into the pressing issues and potential solutions for environmental sustainability.",
  },
  {
    title: "Cybersecurity in the Digital Age: Threats and Countermeasures",
    author: "Vikram Singh",
    image:
      "https://s3-alpha-sig.figma.com/img/ea0b/dbc6/ae5111a68b47a602892a050862c67d85?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XJcfBhYbFAkPCUUG1P1ovlb84t~o0SlfGpuFnUyACSCEdYErfZkUvOACjr~u3XGHrY8fwOs2xMEFNVeCbmhrvBQjSJQb44rZB8swFC~jD6xtQH3xC0a4aHc8SkeMebZkfMPa0J7QukODCp8KO6Sp7~OfShaskYE0uYCUUH-bIdl3dU0-DMxIq9CGaECDUqVza95RYOBAdLY6HzXdgG9zr8WI67MwSq3IpfywlqIzAMlL-DTN5kllO~EV209IeAjjdz3h24nGtXLebBvILpSyW2XEz95A3NayaKZZbsJPEW9EM4m7Fvix3N4WpNjL3CDNuPD3F5gtTNpMgSfARz2eWA__",
    description:
      "Explore the evolving landscape of cybersecurity threats and countermeasures.",
  },
  {
    title:
      "Data Science and Analytics: Applications in Business and Healthcare",
    author: "Sandeep Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/879f/2f57/535860765c1325ea9535dbedc35f3c9a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvDdtM~eoyk9MOgjpHaKJVwzD9VKrAAkffxRqoFpkJICbg3-tpTa3VVTxmsWbLaFxgdY84IDnnnCtLKY1D1hzQPpWOBuk-3i946socsbvfad2fxJR7rSY79voldL6x8SNlBGf7Mq7SjeuP3-NVMgsVa2xHAzkUYBcND95eY3AjzuIDql4sy2py6-TiOiIXA52z0LgjA4DNamQLTMiu2RsBn2UYtWkvNVmJ7GTmUZ1XdV1aJljGEz6KioQDssfqFjI6So4CccwDw02OUIZ~keR4y~CzShZZ0U7V0UL1tO~Lvl8--qfPWBK2KN7NvzTPMT6vmxreqL~RFDxZjCXUkjbQ__",
    description:
      "Discover the applications of data science and analytics in business and healthcare.",
  },
];
const journalBooks = [
  {
    title: "Nanocomposites: Advancing Materials For Modern Applications",
    author: "Ahmad Umar",
    image:
      "https://s3-alpha-sig.figma.com/img/5cf6/ed39/d60f83ac670e66b3ad8193e385a015ff?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A-5gENvHJoBQso8haLr97Pv5a5iVbT5laz8IihoeWqmFdcGiMVraFGlnX98TG9Nj8upq6L8INcNTCwxD-rENS8xQTeTNTtkJQ2zR2rHdmtBegCv8JX81PGNZJaedlerWmZVstnvdyn~6TaM7jSyLRjS2r5-igxt3kwd~dP-yrGgnnG~KtnZvpRjjAoGkL0kBmREEI8il94CpCqHhszQxvB90o8H7RfftOpPrZ5zjKcYkoAy9k0EBw0bxL9wSq0qE6JB5w3Gr3cUvE50U3JMePwQ2HlRwQJ5JlFu1O4wlgv~yPUCfR8uR8JRhs6au7pu8JvVZUdrGtefzBP5tD4tCQg__",
    description:
      "Explore the cutting-edge world of nanocomposites and their applications in modern technology.",
  },
  {
    title:
      "Millets And Millet Products: From Traditional Grains To Nutritional PowerHouses",
    author: "Kuldeep Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/3fca/b341/1b6d43287a8da7e00550aff7cdeead8b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XHTrxqY8PawYwgN5j6XsbOmC11YdVAEOQ3twazPMjJEtqcrjsVvY1eWbuX-bLKVhV-K4EWOqbjU05YqIkCcc3OmTq1Mqvw6Hzswf-5CfqRSm2wjeSWNOV3J6UzB6XxfO2gDkaZyZ~7TxiLeCGO4ydgDWE9E5sJq1-Q-W-q6zM1~~CpPKs51G8FIZ8p1AtEegPcsnrUNHCvs85AeaYa6gG3yCDZOpG6pgMaq-B2U0WPYqyv24dLTwlX~sTl4XHLx6~STgo5BhbPW05oo8Ne9hKmmRuTNB0NJeL9VBnY0i4cxJghREpDTBVxOZonb~Ia24n-o0oIz7SlPwx7mspPKRaQ__",
    description:
      "Discover the nutritional benefits and versatility of traditional millet grains.",
  },
  {
    title:
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation And Human Health",
    author: "Ahmad Umar",
    image:
      "https://s3-alpha-sig.figma.com/img/adc6/d19c/17ffc6718bbc0aaef5479d40cd31be32?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jcSxC4zMVGkg7W2ebPEWa-dGhGzOHr6oim4grlD5eQatYB8lH780dnsJhQ5bDJkLyKRts3e8uR5-hRDeRmw3ig~ghQITxGdkqXpZyyTIWdlhy3JusIBURB6EYSfm8-SGxENjCBYCSGAs-yekV8lVILj2qjR7gz5b-sKbLbrriKlddtgDAknZC5YNsEe4AEmGiIpkonNg54J~qX5YTeljRnhhffHxvAlSqdscr8yziZaAG28LvKxcCK5nMgqRlgbFJT5rxf0irVzQC8pwDUtWmYpzXJGvsrqYqQTHGrdJ9FdQmxiDqPSNno3RDuda~dbwe7LNX-9KuTXzqz56rAqwgw__",
    description:
      "Learn about the intersection of nanotechnology and sustainable conservation.",
  },
  {
    title:
      "Advances in Biotechnology: Applications in Medicine and Agriculture",
    author: "Rajesh Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/0ef1/1cd5/5badfdb4a3225ea78e2bfaae127751f9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fLOgoC5RiUstXCXhZLOLknnrJd1uoiNB0yhzAjqYrjz8hQr7jqQuvbIsy~B~xJ1lS4gi94QvVGgmPgoZCevfp2unC0h4QE8xneNxxAviX4p21n8FGyO7nsaA--SUM7fCsVl2m8jKz7NK56bOUAgzfIhFyUQj2ohZTmYhkzfOWS8B6GDsjHamC4q2tYSloKkbLGzWL7-SsdhMmhZ~qiQATGMEkFIsvdkILvsymexCLrsleGezQwmIS7i~huNeSr1lC6bV58CvrFIVpImQCTwJjTNyUQj-yJWIcC12FDtJa9UVExRTvgPClhbCfDMklazol3HvBdrbrhKymu7iCudS3w__",
    description:
      "Explore the latest advancements in biotechnology and their impact on medicine and agriculture.",
  },
  {
    title:
      "Materials Science and Engineering: Emerging Trends and Applications",
    author: "Suresh Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/ea0b/dbc6/ae5111a68b47a602892a050862c67d85?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XJcfBhYbFAkPCUUG1P1ovlb84t~o0SlfGpuFnUyACSCEdYErfZkUvOACjr~u3XGHrY8fwOs2xMEFNVeCbmhrvBQjSJQb44rZB8swFC~jD6xtQH3xC0a4aHc8SkeMebZkfMPa0J7QukODCp8KO6Sp7~OfShaskYE0uYCUUH-bIdl3dU0-DMxIq9CGaECDUqVza95RYOBAdLY6HzXdgG9zr8WI67MwSq3IpfywlqIzAMlL-DTN5kllO~EV209IeAjjdz3h24nGtXLebBvILpSyW2XEz95A3NayaKZZbsJPEW9EM4m7Fvix3N4WpNjL3CDNuPD3F5gtTNpMgSfARz2eWA__",
    description:
      "Discover the latest developments in materials science and their applications across various industries.",
  },
  {
    title:
      "Artificial Intelligence in Healthcare: Current Trends and Future Directions",
    author: "Anil Kumar",
    image:
      "https://s3-alpha-sig.figma.com/img/879f/2f57/535860765c1325ea9535dbedc35f3c9a?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HvDdtM~eoyk9MOgjpHaKJVwzD9VKrAAkffxRqoFpkJICbg3-tpTa3VVTxmsWbLaFxgdY84IDnnnCtLKY1D1hzQPpWOBuk-3i946socsbvfad2fxJR7rSY79voldL6x8SNlBGf7Mq7SjeuP3-NVMgsVa2xHAzkUYBcND95eY3AjzuIDql4sy2py6-TiOiIXA52z0LgjA4DNamQLTMiu2RsBn2UYtWkvNVmJ7GTmUZ1XdV1aJljGEz6KioQDssfqFjI6So4CccwDw02OUIZ~keR4y~CzShZZ0U7V0UL1tO~Lvl8--qfPWBK2KN7NvzTPMT6vmxreqL~RFDxZjCXUkjbQ__",
    description:
      "Explore the current state and future prospects of artificial intelligence applications in the healthcare industry.",
  },
];

const articles: Article[] = [
  {
    title:
      "Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and Applications",
    date: "April 2025",
    imageUrl: "/images/recent-articles/article-thumbnail.png",
  },
  {
    title:
      "Investigating the Potential of Gd3+ doped LiBPO4 Phosphors in Improving White Lighting Applications: Synthesis..",
    date: "April 2025",
    imageUrl: "/images/recent-articles/article-thumbnail.png",
  },
  {
    title:
      "Advancements in Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and...",
    date: "April 2025",
    imageUrl: "/images/recent-articles/article-thumbnail.png",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Publish With Us Your Research Work"
        description="Discover a diverse collection of books that inspire, educate, and empower. Whether you're looking for academic research, insightful literature, or engaging reads, our collection offers something for everyone."
        imageSrc="/images/header_img.svg"
        exploreBtnTitle="Books"
      />
      {/* Value Propositions Section */}
      <ValuePropositions
        welcomeTitle={valuePropositionsData.welcomeTitle}
        welcomeDescription={valuePropositionsData.welcomeDescription}
        valuePropositions={valuePropositionsData.valuePropositions}
        sectionBadgeTitle="ABOUT US"
        onGetMore={() => {
          // Handle get more click
          console.log("Get More clicked");
        }}
      />

      {/* Popular Books Section */}
      <BooksSection
        books={popularBooks}
        title="Our Books"
        sectionBadgeTitle="OUR BOOKS"
        description="Ariston Publications offers a diverse collection of high-quality books spanning various disciplines, including Science, Engineering, Medicine, Artificial Intelligence, Materials Science, and more. Our publications are meticulously curated to support researchers, academics, and professionals in advancing knowledge and fostering innovation. We welcome authors to contribute groundbreaking works that shape the future of scientific and academic discourse."
        onViewMore={() => {}}
      />

      {/* Journals Section */}
      <BooksSection
        books={journalBooks}
        title="Our Journals"
        sectionBadgeTitle="OUR JOURNALS"
        description="Ariston Publications is a premier publisher of high-impact journals spanning Science, Engineering, Medicine, Computer Science, Artificial Intelligence, Materials Science, Chemical Science, Energy, and Environment. Committed to excellence, we uphold rigorous peer review and open-access dissemination. Explore our distinguished journal portfolio for cutting-edge research."
        onViewMore={() => {}}
        background="#F8F8F8"
      />

      {/* FAQ Section */}
      {/* <section className="container mx-auto py-12 md:py-16 px-4 md:px-8 lg:px-16">
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
      </section> */}
      {/* Recent Articles Section */}
      <RecentArticles heading="Recent Articles" articles={articles} />

      <ValuePropositions
        valueCard={false}
        welcomeTitle={recentEventData.welcomeTitle}
        welcomeDescription={recentEventData.welcomeDescription}
        valuePropositions={recentEventData.valuePropositions}
        sectionBadgeTitle="UPDATES"
        onGetMore={() => {
          // Handle get more click
          console.log("Get More clicked");
        }}
      />

      {/* Newsletter Section */}
      <NewsletterSubscribeCard />
    </div>
  );
};

export default Home;
