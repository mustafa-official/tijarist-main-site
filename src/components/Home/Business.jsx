import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineStorefront } from "react-icons/md";
import { TbTemplate, TbWorld } from "react-icons/tb";

const Business = () => {
  const [activeTab, setActiveTab] = useState("business");

  const tabs = [
    { id: "business", label: "Start your business" },
    { id: "products", label: "Sell your products" },
    { id: "marketing", label: "Marketing" },
    { id: "manage", label: "Manage Your Business" },
  ];
  return (
    <div className="sm:px-0 px-4">
      {/* Tabs */}
      <div className="flex gap-3 mb-4 w-full min-w-0 sm:max-w-5xl mx-auto overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-2 sm:py-3 flex rounded-3xl text-[10px] sm:text-sm font-medium transition-all ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-white/80 text-black border border-black hover:bg-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-black text-white rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Column */}
          <div>
            <h1 className="font-semibold text-2xl md:text-3xl mb-8">
              Get everything you need to set up your online business in minutes.
            </h1>

            <div className="space-y-4 mb-8">
              {[
                "Quick Setup",
                "Cost-Effective",
                "No Technical Skills Required",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <IoIosCheckmarkCircle className="w-6 h-6 text-[#ABF8AE]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <blockquote className="text-white text-sm leading-7 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </blockquote>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-500" />
              <span className="text-[12px] text-white font-semibold">
                John schuman
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-3xl border border-white cursor-pointer">
                <MdOutlineStorefront className="w-6 h-6" />
                <span>Intuitive store builder</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-3xl border border-white cursor-pointer">
                <TbTemplate className="w-6 h-6" />
                <span>Professional templates</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-3xl border border-white cursor-pointer">
                <TbWorld className="w-6 h-6" />
                <span>Hosting and domain integration</span>
              </div>
            </div>
            <div className="mt-6 lg:mt-12">
              <button className="w-full text-[16px] font-semibold py-4  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl transition-all">
                Start Building
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
