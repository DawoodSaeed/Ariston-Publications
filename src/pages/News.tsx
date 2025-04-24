import messageicon from "../assets/messageicon.svg";
import resourceimg from '../assets/resources.png'
import NewsletterSubscribeCard from "@/components/home/Newsletter";

const events = [
  {
    id: 1,
    title:
      "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚",
    date: "Mon Oct 28 2024",
    readMoreLink: "/news/launch-matsci-express",
  },
  {
    id: 2,
    title:
      "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚",
    date: "Mon Oct 28 2024",
    readMoreLink: "/news/launch-matsci-express",
  },
  {
    id: 3,
    title:
      "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚",
    date: "Mon Oct 28 2024",
    readMoreLink: "/news/launch-matsci-express",
  },
  {
    id: 4,
    title:
      "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚",
    date: "Mon Oct 28 2024",
    readMoreLink: "/news/launch-matsci-express",
  },
  {
    id: 5,
    title:
      "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚",
    date: "Mon Oct 28 2024",
    readMoreLink: "/news/launch-matsci-express",
  },
  {
    id: 6,
    title:
      "📢 Exciting News Alert! Ariston Publications Proudly Launches MatSci Express Journal! 🚀📚",
    date: "Mon Oct 28 2024",
    readMoreLink: "/news/launch-matsci-express",
  },
];
const resources=[
  {
    "date": "June 2025",
    "title": "Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and Applications",
    "image":resourceimg
  },
  {
    "date": "June 2025",
    "title": "Investigating the Potential of Gd3+ doped LiBPO4 Phosphors in Improving White Lighting Applications: Synthesis..",
    "image": resourceimg
  },
  {
    "date": "June 2025",
    "title": "Advancements in Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and...",
    "image":resourceimg
  },
  {
    "date": "June 2025",
    "title": "Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and Applications",
    "image":resourceimg
  },
  {
    "date": "June 2025",
    "title": "Investigating the Potential of Gd3+ doped LiBPO4 Phosphors in Improving White Lighting Applications: Synthesis..",
    "image":resourceimg
  },
  {
    "date": "June 2025",
    "title": "Advancements in Gadolinium-Doped Carbon Quantum Dots for Dual and Multi-Modal Bioimaging: Synthesis Methods and...",
    "image": resourceimg
  }
]

const News = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col gap-20">
      <section
        className="relative pt-20 md:pt-24 min-h-[500px] flex items-center flex-col"
        style={{
          background:
            "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
        }}
      >
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-[#0B0C58] text-4xl font-extrabold ">
            Stay Updated with Ariston
          </h1>
          <h4 className="w-3/5  mx-auto">
            Explore the latest news, industry insights, and expert opinions.
            From in-depth blogs to exciting company updates, stay ahead with
            Ariston’s latest happenings.
          </h4>

          <div className="flex items-center bg-white  rounded-full shadow-md p-1 w-full max-w-md mx-auto">
            <div className="flex items-center px-4">
              <img
                src={messageicon}
                alt="mail"
                className="w-5 h-5 text-gray-400"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your e-mail"
              className="flex-1 bg-transparent outline-none text-gray-600 placeholder:text-gray-400"
            />
            <button className="bg-[#0401A5] text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </div>

        <div className="flex   absolute bottom-[-40px] left-0">
          <img src="/images/star.svg" alt="star" className="h-20 w-20 " />
        </div>
      </section>

      <section className="grid grid-cols-2">
        <div className="flex flex-col">
          <span
            className="text-xs uppercase font-semibold text-[#353535] mb-2 w-max px-4 rounded-full"
            style={{
              background:
                "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
            }}
          >
            UPDATES
          </span>
          <p className="text-4xl font-extrabold text-[#0B0C58] w-2/4 mt-4">
            Latest Events And News
          </p>
          <p className="w-3/4 text-[#434343] mt-8">
            Journals For scientists, engineers, and industry R&D personnel
            engaged in the development, engineering scale-up and next-generation
            education in academics.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-8">
          {events.slice(0, 4).map((item) => (
            <div key={item.id} className="rounded-lg border p-4 w-[300px]">
              <h2 className="font-bold text-lg line-clamp-2">{item.title}</h2>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <span className="text-blue-600">🔵</span>
                <span>{item.date}</span>
              </div>
              <a
                href={item.readMoreLink}
                className="mt-4 inline-block text-blue-800 font-medium"
              >
                Read More <span>➤</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Resources Section */}
      <section className="flex flex-col">
        <span
          className="text-xs uppercase font-semibold text-[#353535] mb-2 w-max px-4 rounded-full"
          style={{
            background:
              "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
          }}
        >
          BLOG
        </span>
        <p className="text-[#0B0C58] text-4xl font-extrabold ">
          Our Latest resources & Insight
        </p>

        <div className="flex gap-4">
          <button className="bg-[#0B0C58] text-white rounded-full py-2 px-4">
            All
          </button>
          <button className="text-[#222222] rounded-full py-2 px-4 border border-[#E0E3D7]">
            Latest
          </button>
          <button className="text-[#222222] rounded-full py-2 px-4 border border-[#E0E3D7]">
            Popular
          </button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {resources.map((itm, index) => (
            <div key={index} className="border border-[red]">
              <img src={itm.image} alt="" />
              <p>{itm.title}</p>
            </div>
          ))}
        </div>
      </section>

      <NewsletterSubscribeCard />
    </div>
  );
};

export default News;
