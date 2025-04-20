import React from "react";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import community from "../assets/community.svg";
import excellence from "../assets/exellence.svg";
import inclusivity from "../assets/inclusivity.svg";
import innovation from "../assets/innovation.svg";
import collaboration from "../assets/collaboration.svg";
import author from "../assets/author.svg";
import servicesmain from "../assets/servicesmain.png";

const values = [
  {
    title: "Excellence",
    description:
      "Upholding the highest editorial quality, design, and production standards to create meticulously crafted, impactful publications.",
    image: excellence,
  },
  {
    title: "Inclusivity",
    description:
      "Embracing diverse perspectives and voices, fostering an inclusive literary and academic community.",
    image: inclusivity,
  },

  {
    title: "Innovation",
    description:
      "Encouraging creativity and experimentation, supporting works that push boundaries and redefine tradition.",
    image: innovation,
  },
  {
    title: "Collaboration",
    description:
      "Promoting interdisciplinary dialogue and partnerships, bridging gaps between researchers, institutions, and industries.",
    image: collaboration,
  },
  {
    title: "Community",
    description:
      "Building a vibrant, inclusive network of authors, readers, and scholars passionate about literature and scholarship.",
    image: community,
  },
];

const authors = [
  {
    name: "Cameron Williamson",
    title: "Nanomaterials Scientist",
    image: author,
  },
  {
    name: "Jane Cooper",
    title: "Theoretical Chemist",
    image: author,
  },
  {
    name: "Eleanor Pena",
    title: "Nanomedicine Expert",
    image: author,
  },
  {
    name: "Brooklyn Simmons",
    title: "Physical Chemist",
    image: author,
  },
  {
    name: "Albert Flores",
    title: "Organic Chemist",
    image: author,
  },
  {
    name: "Devon Lane",
    title: "Computational Chemist",
    image: author,
  },
  {
    name: "Annette Black",
    title: "Nanomaterials Scientist",
    image: author,
  },
  {
    name: "Ronald Richards",
    title: "Theoretical Chemist",
    image: author,
  },
];

const services = [
  {
    id: 1,
    title: "Publish Your Research",
    description:
      "Showcasing captivating novels, poetry, drama, and non-fiction that inspire and resonate deeply.",
    image: service1,
  },
  {
    id: 2,
    title: "Enhance Your Manuscript",
    description:
      "Publishing groundbreaking research and theories that expand knowledge and inform intellectual discourse.",
    image: service2,
  },
  {
    id: 3,
    title: "Increase Your Visibility",
    description:
      "Encouraging original thinking and imaginative works that reflect diverse perspectives and experiences.",
    image: service3,
  },
  {
    id: 4,
    title: "Join Our Community",
    description:
      "Preserving and celebrating the stories, traditions, and knowledge systems of communities around the world.",
    image: service4,
  },
];
const About = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col gap-20">
      <section className="relative pt-20 md:pt-24 min-h-[500px] flex items-center flex-col">
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-[#0B0C58] text-4xl font-extrabold ">
            Publishing Made Simple
          </h1>
          <h4 className="w-3/5  mx-auto">
            Arsiton Publications offers a full suite of publishing services to
            bring your ideas to life. From professional editing and book design
            to publishing, marketing, and distribution, we ensure your work
            reaches the right audience.
          </h4>
          <button className="w-[177px] bg-[#0B0C58] h-[52px] rounded-full text-white mx-auto">
            Explore Books
          </button>
        </div>
        <div className="flex items-end space-x-4">
          <img src={servicesmain} alt="" className="rounded-2xl mt-8" />
        </div>
      </section>

      {/* Work Section */}
      <section className="grid grid-cols-2 ">
        <div className="flex flex-col space-y-2 justify-between  ">
          <div className="flex flex-col space-y-2 ">
            <span
              className="text-xs uppercase font-semibold text-[#353535] mb-2 w-max p-2 rounded-full"
              style={{
                background:
                  "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
              }}
            >
              OUR SERVICES
            </span>
            <h4 className="text-4xl font-extrabold text-[#0B0C58] w-3/4">
              Empowering Authors, Elevating Ideas
            </h4>
            <p className="text-[#6E6E6E] w-3/4">
              At Arsiton Publications, we provide comprehensive publishing
              solutions to help authors bring their work to life. From refining
              manuscripts to increasing visibility, our services ensure your
              ideas make a lasting impact.
            </p>
            <button className="rounded-full bg-[#0401A5] w-max p-3 px-4 text-white">
              Contact Us
            </button>
          </div>

          <div className="flex  mt-20">
            <img src="/images/star.svg" alt="star" className="h-20 w-20 " />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {services.map((item) => (
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

      {/* Values Section */}

      <section
        className="flex flex-col items-center  py-20 "
        style={{
          background:
            " linear-gradient(269.21deg, rgba(125, 127, 244, 0) 1.92%, rgba(3, 3, 208, 0.04) 26.97%, rgba(6, 6, 82, 0.05) 92.72%)",
        }}
      >
        <span
          className="text-xs uppercase font-semibold text-[#353535] mb-2 w-max p-2 rounded-full"
          style={{
            background:
              "linear-gradient(269.21deg, rgba(125, 127, 244, 0.26) 1.92%, rgba(3, 3, 208, 0.14) 26.97%, rgba(6, 6, 82, 0.02) 92.72%)",
          }}
        >
          Our Values
        </span>
        <p className="text-4xl font-extrabold text-[#0B0C58]">
          The values that drive everything we do
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-3/4 ">
          {values.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white shadow rounded-2xl p-6">
              <img src={item.image} alt={item.title} />

              <h3 className="text-2xl font-extrabold text-[#0B0C58] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
        {/* Custom wrap the last two items */}
        <div className=" flex justify-center gap-6 w-1/2">
          {values.slice(3).map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-2xl p-6  md:w-1/2 "
            >
              <img src={item.image} alt={item.title} />
              <h3 className="text-2xl font-extrabold text-[#0B0C58] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
