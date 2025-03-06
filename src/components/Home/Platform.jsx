import React, { useState } from "react";

const Platform = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [availability, setAvailability] = useState(false);
  const [price, setPrice] = useState(false);
  return (
    <div className="bg-gradient-to-br from-black via-[#2d0a55] to-black text-white">
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex justify-center items-center">
          <div className="bg-white backdrop-blur-lg rounded-[30px] p-1.5 inline-flex gap-2 mb-16">
            <button
              onClick={() => setActiveTab("create")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "create"
                  ? "bg-[#7230FF] text-white"
                  : "text-[#555151]"
              }`}
            >
              Create Project
            </button>
            <button
              onClick={() => setActiveTab("manage")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "manage"
                  ? "bg-[#7230FF] text-white"
                  : "text-[#555151]"
              }`}
            >
              Manage Customers
            </button>
            <button
              onClick={() => setActiveTab("themes")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === "themes"
                  ? "bg-[#7230FF] text-white"
                  : "text-[#555151]"
              }`}
            >
              Change Themes
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Bring Your Vision
              <br />
              to Life in Just a<br />
              Few Steps!
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Start your journey to online success with our intuitive tools and
              features. No experience required!
            </p>
          </div>

          {/* Right Content - Product Cards */}
          <div className="relative">img</div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
