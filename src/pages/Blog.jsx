import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
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
  {
    title: "IAC exploring spinoff home improvement marketplace Angi",
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
  {
    title: "Costco beats on earnings as e-commerce sales jump",
    category: "Business",
    date: "23 June, 2024",
    author: "John Schuman",
    image: blog3,
  },
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
];
const Blog = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");
  const filterRef = useRef(null);

  const toggleDropdown = () => {
    setFilterOpen(!filterOpen);
  };

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
    setFilterOpen(false);
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4 text-center">
        <h2 className="inline-block px-4 py-2 rounded-full border border-black text-black text-base font-semibold">
          Blog
        </h2>
        <h2 className="font-semibold mt-6 md:mt-8 lg:mt-10 text-2xl md:text-3xl text-black">
          Latest News and Articles
        </h2>
        <p className="text-[#555151] text-base mt-3">
          From building your first website and registering your domain to
          setting up a professional email address,
        </p>
      </div>
      <div className="flex items-center justify-between gap-4 mt-10">
        <div className="relative max-w-64 md:max-w-72 w-full">
          <input
            type="search"
            name=""
            className="py-3 rounded-full bg-white px-5 w-full outline-none"
            placeholder="Search blogs"
          />
          <FiSearch
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
        <div ref={filterRef} className="relative min-w-max">
          <button
            type="button"
            onClick={toggleDropdown}
            className="text-[#555151] w-full px-5 py-3 rounded-full bg-white justify-center flex items-center text-sm"
          >
            {selectedFilter || "Sort by"}
            <TiArrowSortedDown className="ml-1 text-[#555151]" size={18} />
          </button>

          {filterOpen && (
            <ul className="absolute mt-1 border border-gray-300 bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">
              {["Latest", "Oldest"].map(
                (filter) => (
                  <li
                    key={filter}
                    onClick={() => handleFilterClick(filter)}
                    className="py-2 px-5 hover:bg-[#F2F2F2CC] text-black text-[12px] cursor-pointer"
                  >
                    {filter}
                  </li>
                )
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 mt-8">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
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
      <div className="mt-6 sm:mt-12 text-center">
        <button className="text-xs font-semibold py-2.5 px-7 text-white  bg-gradient-to-b from-[#4761CB] to-[#7E42FF] rounded-lg">
          Load More..
        </button>
      </div>
    </div>
  );
};

export default Blog;
