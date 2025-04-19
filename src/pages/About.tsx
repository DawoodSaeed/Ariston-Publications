
import React from 'react';
import aboutimg1 from '../assets/aboutimg1.svg'; 
import aboutimg2 from '../assets/aboutimg2.svg'; 
import aboutimg3 from '../assets/aboutimg3.svg'; 
import aboutimg4 from '../assets/aboutimg4.svg'; 
import person1 from '../assets/person1.svg'; 
import person2 from '../assets/person2.svg'; 
const About = () => {
  return (
    <div className="container mx-auto py-16">

      <section className="relative pt-20 md:pt-24 min-h-[500px] flex items-center flex-col">
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-[#0B0C58] text-4xl font-extrabold ">About Ariston Publications</h1>
          <h4 className="w-3/5  mx-auto">Ariston Publications is a premier publishing house dedicated to advancing the frontiers of knowledge and fostering a vibrant community of thinkers, writers, and readers.</h4>
        <button className="w-[177px] bg-[#0B0C58] h-[52px] rounded-full text-white mx-auto">Explore Books</button>
        </div>
        <div className="flex items-end space-x-4">
          <img src={aboutimg1} alt="" className='rounded-2xl'/>
          <img src={aboutimg2} alt="" className='rounded-2xl'/>
          <img src={aboutimg3} alt="" className='rounded-2xl'/>
          <img src={aboutimg4} alt="" className='rounded-2xl'/>

        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-16 max-w-7xl mx-auto">
      {/* Left Images */}
      <div className="lg:col-span-2 grid grid-cols-2 gap-4 w-2/4">
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
      <div className="flex flex-col justify-center w-2/4">
        <span className="text-xs uppercase font-semibold text-indigo-600 mb-2">Behind the story</span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Welcome To Ariston Publicationss</h2>

        <div className="flex space-x-6 border-b mb-4 pb-2">
          <button className="font-semibold text-indigo-600 border-b-2 border-indigo-600">Our Story</button>
          <button className="text-gray-600 hover:text-indigo-600">Mission</button>
          <button className="text-gray-600 hover:text-indigo-600">Values</button>
        </div>

        <p className="text-gray-700 mb-6 text-sm">
          Ariston Publications is a dynamic and forward-thinking publisher committed to producing high-quality, impactful works across a broad spectrum of disciplines...
        </p>

        <p className="text-indigo-800 font-bold mb-4 text-sm">
          "Our mission is to be a beacon of intellectual exploration and creative expression."
        </p>

        <div className="flex items-center space-x-4">
          <img src="/assets/author.jpg" alt="Author" className="w-12 h-12 rounded-full" />
          <div>
            <p className="font-semibold text-sm">Ahmad Omar</p>
            <p className="text-gray-500 text-xs">Founder, CEO</p>
          </div>
          <img src="/assets/signature.png" alt="Signature" className="h-8 ml-auto" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
