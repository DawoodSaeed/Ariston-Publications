import BooksSection from "@/components/home/BooksSection";
import HeroSection from "@/components/home/HeroSection";

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
