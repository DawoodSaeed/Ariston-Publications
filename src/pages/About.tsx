import React from "react";
import aboutimg1 from "../assets/aboutimg1.svg";
import aboutimg2 from "../assets/aboutimg2.svg";
import aboutimg3 from "../assets/aboutimg3.svg";
import aboutimg4 from "../assets/aboutimg4.svg";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import profile from "../assets/profile.svg";
import signature from "../assets/signature.svg";
import work1 from "../assets/work1.svg";
import work2 from "../assets/work2.svg";
import work3 from "../assets/work3.svg";
import work4 from "../assets/work4.svg";

const workWeDo = [
  {
    id: 1,
    title: "Literary Works",
    description:
      "Showcasing captivating novels, poetry, drama, and non-fiction that inspire and resonate deeply.",
    image: work1,
  },
  {
    id: 2,
    title: "Academic Scholarship",
    description:
      "Publishing groundbreaking research and theories that expand knowledge and inform intellectual discourse.",
    image: work2,
  },
  {
    id: 3,
    title: "Creative Expression",
    description:
      "Encouraging original thinking and imaginative works that reflect diverse perspectives and experiences.",
    image: work3,
  },
  {
    id: 4,
    title: "Cultural Heritage",
    description:
      "Preserving and celebrating the stories, traditions, and knowledge systems of communities around the world.",
    image: work4,
  },
];

const About = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col gap-20">
      <section className="relative pt-20 md:pt-24 min-h-[500px] flex items-center flex-col">
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-[#0B0C58] text-4xl font-extrabold ">
            About Ariston Publications
          </h1>
          <h4 className="w-3/5  mx-auto">
            Ariston Publications is a premier publishing house dedicated to
            advancing the frontiers of knowledge and fostering a vibrant
            community of thinkers, writers, and readers.
          </h4>
          <button className="w-[177px] bg-[#0B0C58] h-[52px] rounded-full text-white mx-auto">
            Explore Books
          </button>
        </div>
        <div className="flex items-end space-x-4">
          <img src={aboutimg1} alt="" className="rounded-2xl" />
          <img src={aboutimg2} alt="" className="rounded-2xl" />
          <img src={aboutimg3} alt="" className="rounded-2xl" />
          <img src={aboutimg4} alt="" className="rounded-2xl" />
        </div>
      </section>

      {/* Welcome section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-16 max-w-7xl mx-auto">
        {/* Left Images */}
        <div className="lg:col-span-1 grid grid-cols-2 gap-4 ">
          <img
            src={person1}
            alt="Person Reading"
            className="rounded-s-xl object-cover "
          />
          <img
            src={person2}
            alt="Person Searching"
            className="rounded-e-xl object-cover "
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center lg:col-span-1">
          <span
            className="text-xs uppercase font-semibold text-[#353535] mb-2 w-max p-2 rounded-full"
            style={{
              background:
                "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
            }}
          >
            Behind the story
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Welcome To Ariston Publicationss
          </h2>

          <div className="flex space-x-6 border-b mb-4 pb-2">
            <button className="font-semibold text-indigo-600 border-b-2 border-indigo-600">
              Our Story
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              Mission
            </button>
            <button className="text-gray-600 hover:text-indigo-600">
              Values
            </button>
          </div>

          <p className="text-gray-700 mb-6 text-sm">
            Ariston Publications is a dynamic and forward-thinking publisher
            committed to producing high-quality, impactful works across a broad
            spectrum of disciplines. Our portfolio includes an extensive range
            of literary genres—fiction, non-fiction, poetry, and drama—as well
            as scholarly works spanning the humanities, social sciences, natural
            sciences, and applied sciences.{" "}
          </p>

          <p className="text-indigo-800 font-bold mb-4 text-sm">
            "Our mission is to be a beacon of intellectual exploration and
            creative expression."
          </p>

          <div className="flex items-center space-x-4 justify-between w-2/4">
            <div className="flex items-center space-x-4">
              <img
                src={profile}
                alt="Author"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold text-sm">Ahmad Omar</p>
                <p className="text-gray-500 text-xs">Founder, CEO</p>
              </div>
            </div>

            <img src={signature} alt="Signature" className="h-8 ml-auto" />
          </div>
        </div>
      </section>
      {/* Work Section */}
      <section className="grid grid-cols-2 ">
        <div className="flex flex-col space-y-2  ">
          <span
            className="text-xs uppercase font-semibold text-[#353535] mb-2 w-max p-2 rounded-full"
            style={{
              background:
                "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
            }}
          >
            Process
          </span>
          <h4 className="text-4xl font-extrabold text-[#0B0C58] ">
            What We Do
          </h4>
          <p className="text-[#6E6E6E]">
            At Ariston Publications, we publish a diverse array of works that
            captivate the imagination, challenge the status quo, and illuminate
            the human experience. Our catalogue includes:
          </p>
          <button className="rounded-full bg-[#0401A5] w-max p-3 px-4 text-white">
            Explore Journals
          </button>
        </div>

        <div className="flex flex-col gap-8">
          {workWeDo.map((item) => (
            <div
              className="flex p-4 bg-[#F7F8F7]  flex-col rounded-2xl gap-4"
              key={item.id}
            >
              <img className="rounded-2xl" src={item.image} alt={item.title} />
              <div className="flex gap-4">
                <span className="text-[#0B0C58] font-black text-3xl">
                  {item.id.toString().padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h1 className=" font-extrabold text-2xl text-[#0B0C58] ">
                    {item.title}
                  </h1>
                  <p className=" break-words text-[#6E6E6E] ">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
