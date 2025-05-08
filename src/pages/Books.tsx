import BooksSection from "@/components/home/BooksSection";
import HeroSection from "@/components/home/HeroSection";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";


const popularBooks = [
  {
    title: "Nanocomposites: Advancing Materials For Modern Applications",
    author: "Ahmad Umar",
    image:book1,
    description:
      "Explore the cutting-edge world of nanocomposites and their applications in modern technology.",
  },
  {
    title:
      "Millets And Millet Products: From Traditional Grains To Nutritional PowerHouses",
    author: "Kuldeep Kumar",
    image:book2,
    description:
      "Discover the nutritional benefits and versatility of traditional millet grains.",
  },
  {
    title:
      "Nanoscience And Nanotechnology: Sustainable Phyto-Diversity Conservation And Human Health",
    author: "Ahmad Umar",
    image:book3,
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

const Journals = () => {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Books"
        description="Explore a wide range of scholarly and industry-leading journals designed to inform, inspire, and advance knowledge. From research publications to expert insights, our journals cater to professionals, academics, and enthusiasts alike."
        imageSrc="/images/hero_section.svg"
        exploreBtnTitle="Books"
      />

      {/* Journals Section */}
      <BooksSection
        books={popularBooks}
        title="Our Books"
        sectionBadgeTitle="Our Books"
        onViewMore={() => {}}
        background="white"
        viewMoreBtn={false}
        description="Discover a diverse collection of books that inspire, educate, and empower. Whether you're looking for academic research, insightful literature, or engaging reads, our collection offers something for everyone."
      />
    </div>
  );
};

export default Journals;
