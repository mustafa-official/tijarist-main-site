import { useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import ReactPlayer from "react-player";

const menuItems = [
  { title: "Overview", active: true },
  { title: "Price and plans", active: false },
  { title: "Initial setup", active: false },
  { title: "Store design checklist", active: false },
];

const sections = [
  {
    title: "Migrate to Tijarist",
    items: [
      "Migrate your retail store",
      "Migrate from Clover",
      "Migrate from Square",
      "Compliance",
    ],
  },
  {
    title: "Admin",
    items: ["Admin Overview", "Supported Browsers", "Backups and duplications"],
  },
  {
    title: "Your Account",
    items: ["Admin Overview", "Supported Browsers", "Backups and duplications"],
  },
];

const HelpCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="mb-4 lg:text-left text-center">
        <h2 className="inline-block px-4 py-2 rounded-full border border-black text-black text-base font-semibold">
          Help Center
        </h2>
        <p className="mt-3 text-[#555151] font-medium text-base">
          Look for answers for any problem or ques you face
        </p>
      </div>

      {/* Main Content Container */}
      <div className="mt-4 lg:mt-8 lg:flex lg:gap-5">
        {/* Mobile Search */}
        <div className="lg:hidden mb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full pl-3 pr-10 py-2 text-sm text-[#555151] rounded-xl border border-[#555151] outline-none"
            />
            <RiSearchLine className="absolute right-3 top-2.5 text-[#555151] w-5 h-5" />
          </div>
        </div>

        {/* Sidebar - Mobile Dropdown */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-white p-3 rounded-2xl shadow-sm"
          >
            <span>Menu</span>
            <BiSolidUpArrow
              className={`transform transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <div className="mt-2 bg-white rounded-2xl p-4 shadow-sm">
              <div>
                <h2 className="text-black text-base font-medium">
                  Intro to Tijarist
                </h2>
                <div className="mt-2">
                  {menuItems.map((item, index) => (
                    <div
                      key={index}
                      className={`rounded-xl mt-2 text-sm ${
                        item.active
                          ? "bg-[#7230FF1A] text-[#7230FF] px-3 py-2 font-semibold"
                          : "text-[#555151]"
                      }`}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>

              {sections.map((section, index) => (
                <div key={index} className="mt-3">
                  <div className="py-1 text-black text-base font-medium">
                    {section.title}
                  </div>
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="py-1 text-sm text-[#555151]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sidebar - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search Anything"
                className="w-full pl-3 pr-10 py-2 text-sm text-[#555151] rounded-xl border border-[#555151] outline-none"
              />
              <RiSearchLine className="absolute right-3 top-2.5 text-[#555151] w-5 h-5" />
            </div>

            <div>
              <h2 className="text-black text-base font-medium mt-4">
                Intro to Tijarist
              </h2>
              <div className="mt-2">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-xl cursor-pointer mt-2 text-sm ${
                      item.active
                        ? "bg-[#7230FF1A] text-[#7230FF] px-3 py-2 font-semibold"
                        : "text-[#555151]"
                    }`}
                  >
                    {item.title}
                  </div>
                ))}
              </div>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="mt-3">
                <div className="py-1 text-black text-base font-medium">
                  {section.title}
                </div>
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="py-1 cursor-pointer text-sm text-[#555151]">
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm p-6 lg:p-8">
          <h1 className="text-2xl font-semibold mb-4">Adding Products</h1>

          <p className="text-gray-600 mb-4">
            You can add new products, or update product information such as
            price, variants, and availability, from the Products page in your
            Shopify admin, or in the Shopify app.
          </p>

          <p className="text-gray-600 mb-6">
            If you want to save specialized information or files for your
            products, then you can add custom fields to your product pages by
            using metafields. If you have an Online Store 2.0 theme, then you
            can add references to your product metafields in the theme editor.
          </p>

          {/* Video Section */}
          <div className="relative w-full h-48 sm:h-80 rounded-2xl overflow-hidden">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=r_9qBZUZ_XQ"
              width="100%"
              height="100%"
              controls
            />
          </div>

          <p className="text-gray-600 mt-6">
            You can add new products, or update product information such as
            price, variants, and availability, from the Products page in your
            Shopify admin, or in the Shopify app.
          </p>

          <p className="text-gray-600 mt-4">
            If you want to save specialized information or files for your
            products, then you can add custom fields to your product pages by
            using metafields. If you have an Online Store 2.0 theme, then you
            can add references to your product metafields in the theme editor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
