import { useState } from "react";
import img from "../../assets/platform.png";

const Platform = () => {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto sm:px-0 px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
          Intro to Platform
        </h2>
        <p className="text-[#555151] text-base text-center mt-3">
          Here are three powerful questions that helps you determine if Tijarist
          is the right solution for them
        </p>
      </div>
      <div className="bg-gradient-to-br from-black to-[#1d0638] text-white py-6 lg:py-14 rounded-3xl lg:px-14">
        {/* Navigation Tabs */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="bg-white backdrop-blur-lg rounded-[30px] p-1.5 inline-flex gap-2 mb-16">
              <button
                onClick={() => setActiveTab("create")}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-sm font-medium transition-all ${
                  activeTab === "create"
                    ? "bg-[#7230FF] text-white"
                    : "text-[#555151]"
                }`}
              >
                Create Project
              </button>
              <button
                onClick={() => setActiveTab("manage")}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-sm font-medium transition-all ${
                  activeTab === "manage"
                    ? "bg-[#7230FF] text-white"
                    : "text-[#555151]"
                }`}
              >
                Manage Customers
              </button>
              <button
                onClick={() => setActiveTab("themes")}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-[10px] sm:text-sm font-medium transition-all ${
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
          <div className="flex justify-between flex-wrap gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 lg:max-w-[295px]">
                Bring Your Vision to Life in Just a Few Steps!
              </h1>

              <p className="text-[16px] sm:text-lg text-[#F4F4F4]">
                Start your journey to online success{" "}
                <br className="hidden lg:block" /> with our intuitive tools and
                features. No <br className="hidden lg:block" /> experience
                required!
              </p>
            </div>
            {/* Right Content */}
            <div>
              <img src={img} className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
