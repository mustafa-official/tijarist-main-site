import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import img1 from "../assets/themes2.jpeg";
import img2 from "../assets/themes1.jpeg";
import img3 from "../assets/themes3.jpeg";

const industries = [
  { name: "Arts and craft", count: 120 },
  { name: "Baby And kids", count: 85 },
  { name: "Books, Music and video", count: 156 },
  { name: "Clothing", count: 243 },
  { name: "Electronics", count: 198 },
];
const catalogues = [
  { name: "1-9 Products" },
  { name: "10- 199 Products" },
  { name: "200+ Products" },
];
const features = [
  { name: "Breadcrumbs " },
  { name: "Color swatches" },
  { name: "Infinity Scroll" },
  { name: "Quick View" },
  { name: "Right to Left" },
];

const products = [
  {
    id: 1,
    name: "Coffee Lime",
    image: img1,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 2,
    name: "Coffee Lime",
    image: img2,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 3,
    name: "Coffee Lime",
    image: img3,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 4,
    name: "Coffee Lime",
    image: img1,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 5,
    name: "Coffee Lime",
    image: img2,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 6,
    name: "Coffee Lime",
    image: img3,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 7,
    name: "Coffee Lime",
    image: img1,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 8,
    name: "Coffee Lime",
    image: img2,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
  {
    id: 9,
    name: "Coffee Lime",
    image: img3,
    price: 200,
    rating: "85%",
    reviews: 288,
  },
];

const Themes = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    price: true,
    industry: true,
    catalogue: true,
    features: true,
  });
  // Function to toggle a section
  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4 text-center">
        <h2 className="inline-block px-4 py-2 rounded-full border border-black text-black text-base font-semibold">
          Themes
        </h2>
        <h2 className="font-semibold mt-6 text-2xl md:text-3xl text-black">
          Some pre-build themes for easier Store build
        </h2>
      </div>
      <div className="mt-8 md:mt-12">
        {/* Mobile Filter Button */}
        <button
          className="md:hidden flex items-center gap-2 mb-4 bg-white rounded-lg px-4 py-2 shadow-sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FiFilter size={20} />
          <span>Filter</span>
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div
            className={`md:w-64 ${isFilterOpen ? "block" : "hidden"} md:block`}
          >
            {/* Price Filter */}
            <div className="bg-white rounded-xl p-4 mb-2 shadow-sm">
              <div
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => toggleSection("price")}
              >
                <h2 className="font-semibold">Price</h2>
                <IoIosArrowUp
                  size={16}
                  className={`transition-transform duration-300 ease-in-out ${
                    openSections.price ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>

              {openSections.price && (
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Free</span>
                    <span className="text-gray-500 ml-auto">455</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Paid</span>
                    <span className="text-gray-500 ml-auto">455</span>
                  </label>
                </div>
              )}
            </div>

            {/* Industry Filter */}
            <div className="bg-white rounded-xl p-4 mb-2 shadow-sm">
              <div
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => toggleSection("industry")}
              >
                <h2 className="font-semibold">Industry</h2>
                <IoIosArrowUp
                  size={16}
                  className={`transition-transform duration-300 ease-in-out ${
                    openSections.industry ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
              {openSections.industry && (
                <div className="space-y-2">
                  {industries.map((industry) => (
                    <label
                      key={industry.name}
                      className="flex items-center gap-2"
                    >
                      <input type="checkbox" className="rounded" />
                      <span>{industry.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Catalogue Size */}
            <div className="bg-white rounded-xl p-4 mb-2 shadow-sm">
              <div
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => toggleSection("catalogue")}
              >
                <h2 className="font-semibold">Catalogue Size</h2>
                <IoIosArrowUp
                  size={16}
                  className={`transition-transform duration-300 ease-in-out ${
                    openSections.catalogue ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
              {openSections.catalogue && (
                <div className="space-y-2">
                  {catalogues.map((industry) => (
                    <label
                      key={industry.name}
                      className="flex items-center gap-2"
                    >
                      <input type="checkbox" className="rounded" />
                      <span>{industry.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Features */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div
                className="flex items-center justify-between mb-4 cursor-pointer"
                onClick={() => toggleSection("features")}
              >
                <h2 className="font-semibold">Features</h2>
                <IoIosArrowUp
                  size={16}
                  className={`transition-transform duration-300 ease-in-out ${
                    openSections.features ? "rotate-0" : "rotate-180"
                  }`}
                />
              </div>
              {openSections.features && (
                <div className="space-y-2">
                  {features.map((industry) => (
                    <label
                      key={industry.name}
                      className="flex items-center gap-2"
                    >
                      <input type="checkbox" className="rounded" />
                      <span>{industry.name}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm">265 Themes</div>
              <select className="bg-transparent px-4 py-2 border-b border-black outline-none text-[#555151]">
                <option>Sort by: Most Relevant</option>
                <option>Newest</option>
                <option>Oldest</option>
              </select>
            </div>

            {/* Theme Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden flex flex-col h-full"
                >
                  <div className="relative">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 rounded-xl object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent rounded-b-xl"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex justify-between items-center">
                      <button className="bg-white px-3 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-50 transition-colors">
                        <span className="text-xs font-medium">View Demo</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <button className="bg-[#84472C] w-4 h-4 rounded-full border-[3px] border-white"></button>
                        <button className="bg-[#F58A25] w-4 h-4 rounded-full border-[3px] border-white"></button>
                        <button className="bg-[#2FBEF2] w-4 h-4 rounded-full border-[3px] border-white"></button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col flex-grow">
                    <div className="flex items-center justify-between flex-wrap mb-1">
                      <h3 className="text-base font-medium">{product.name}</h3>
                      <div className="flex items-center gap-1 text-base text-purple-600">
                        <span>❤</span>
                        <span className="font-medium">{product.rating}</span>
                        <span className="text-gray-500">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="text-lg md:text-xl font-semibold text-[#7230FF]">
                      ${product.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;
