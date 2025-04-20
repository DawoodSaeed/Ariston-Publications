import messageicon from "../assets/messageicon.svg";
const News = () => {
  return (
    <div className="container mx-auto py-16 flex flex-col gap-20">
      <section className="relative pt-20 md:pt-24 min-h-[500px] flex items-center flex-col">
        <div className="flex flex-col text-center gap-4">
          <h1 className="text-[#0B0C58] text-4xl font-extrabold ">
            Stay Updated with Ariston
          </h1>
          <h4 className="w-3/5  mx-auto">
            Explore the latest news, industry insights, and expert opinions.
            From in-depth blogs to exciting company updates, stay ahead with
            Ariston’s latest happenings.
          </h4>
          <button className="w-[177px] bg-[#0B0C58] h-[52px] rounded-full text-white mx-auto">
            Explore Books
          </button>
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
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
