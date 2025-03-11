import { FaUser } from "react-icons/fa";
import img1 from "../assets/blogdetails1.png";
import img2 from "../assets/blogdetails2.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
const blogs = [
  {
    title: "Indian Ecommerce Funding Drops 42% YoY To $1.5 Bn",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog1,
  },
  {
    title: "MediaMarket launches marketplace in Belgium, Poland, and Turkey",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog2,
  },
  {
    title: "Costco beats on earnings as e-commerce sales jump",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog3,
  },
  {
    title: "IAC exploring spinoff home improvement marketplace Angi",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog2,
  },
];
const BlogDetails = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4 text-center">
        <div className="flex items-center justify-center gap-8">
          <button className="px-5 py-3 bg-[#FCE5CF] rounded-full text-[#F58A25] text-sm font-semibold">
            Business
          </button>
          <p className="text-black text-sm font-medium">23 June , 2024</p>
        </div>
        <h2 className="font-semibold mt-6 md:mt-8 lg:mt-10 text-2xl md:text-3xl max-w-[740px] mx-auto text-black">
          MediaMarket launches marketplace in Belgium, Poland, and Turkey
        </h2>
        <div className="flex items-center justify-center mt-3 md:mt-6 gap-2">
          <div className="w-9 h-9 rounded-full bg-gray-500 flex justify-center items-center">
            <FaUser color="white" />
          </div>
          <p className="text-sm text-black font-semibold">John schuman</p>
        </div>
      </div>
      <div className="mt-6">
        <img src={img1} className="w-full" alt="" />
        <p className="text-xs text-[#00000066] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="max-w-[740px] mx-auto mt-5">
        <p className="text-black text-base leading-6 md:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="my-4">
          <img src={img2} alt="" />
        </div>
        <p className="text-black text-base leading-6 md:leading-7">
          Lorem But that crowd of people had a far narrower escape than mine.
          Only the fact that a hummock of heathery sand inter- cepted the lower
          part of the Heat-Ray saved them. Had the elevation of the parabolic
          mirror been a few yards higher, none could have lived to tell the
          tale. List item one List Item two List item Three They saw the flashes
          and the men falling and an invisible hand, as it were, lit the bushes
          as it hurried towards them through the twilight. Then, with a
          whistling note that rose above the droning of the pit, the beam swung
          close over their heads, lighting the tops of the beech trees that line
          the road, and splitting the bricks, smashing the windows, firing the
          window frames, and bring- ing down in crumbling ruin a portion of the
          gable of the house nearest the corner.
        </p>
      </div>
      <div className="my-16 lg:my-20">
        <h3 className="text-black font-semibold text-lg md:text-2xl">
          Suggestions for you
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                width={300}
                height={200}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <span className="bg-[#FCE5CF] text-[#F58A25] text-xs font-semibold px-3 py-1.5 rounded-full">
                    {blog.category}
                  </span>
                  <p className="text-black text-xs font-medium">{blog.date}</p>
                </div>

                <h3 className="text-md font-semibold text-gray-900 mt-4 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-xs text-[#00000066] my-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
                <div className="flex items-center mt-3 gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-500 flex justify-center items-center">
                    <FaUser color="white" />
                  </div>
                  <p className="text-xs text-black font-semibold">
                    {blog.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
