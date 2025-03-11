import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";

const themes = [
  {
    id: 1,
    images: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 2,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=60",
    ],
  },
  {
    id: 3,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    ],
  },
];

const industries = [
  { name: "Arts and craft", count: 120 },
  { name: "Baby And kids", count: 85 },
  { name: "Books, Music and video", count: 156 },
  { name: "Clothing", count: 243 },
  { name: "Electronics", count: 198 },
];
const Themes = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Price</h2>
                <IoIosArrowUp size={16} />
              </div>
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
            </div>

            {/* Industry Filter */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold">Industry</h2>
                <IoIosArrowUp size={16} />
              </div>
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {themes.map((theme) => (
                <div
                  key={theme.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-[4/3]">
                    {theme.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Theme preview ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 `}
                      />
                    ))}
                    <button className="absolute bottom-4 left-4 bg-white text-black px-6 py-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      View Demo
                    </button>
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
