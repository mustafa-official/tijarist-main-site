import { BiHeart, BiStar } from "react-icons/bi";
import img1 from "../assets/themedetails1.png";
import img2 from "../assets/theme2.png";
import img5 from "../assets/theme5.png";
import img4 from "../assets/theme4.png";

const ThemeDetails = () => {
  return (
    <div>
      <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8 items-stretch mt-6">
          {/* Left Side (Image & Color Presets) */}
          <div className="flex flex-col items-center h-full">
            <img src={img1} alt="" className="h-full object-cover" />
            <div className="flex items-center justify-center gap-1.5 mt-6">
              <button className="bg-[#84472C] w-7 h-7 rounded-full border-[7px] border-white"></button>
              <button className="bg-[#F58A25] w-7 h-7 rounded-full border-[7px] border-white"></button>
              <button className="bg-[#2FBEF2] w-7 h-7 rounded-full border-[7px] border-white"></button>
            </div>
            <p className="text-sm font-semibold text-black text-center mt-2">
              Color Presets
            </p>
          </div>

          {/* Right Side (Text Content) */}
          <div className="bg-black text-white px-4 md:px-6 flex flex-col justify-center items-start py-8 h-full">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">Coffee Lime</h1>
              <h2 className="text-4xl font-semibold mt-4 md:mt-6">$200</h2>

              <div className="flex items-center gap-6 mt-5">
                <div className="flex items-center gap-2">
                  <BiStar className="fill-white" size={20} />
                  <span className="text-xl">
                    188 <span className="text-base">Reviews</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <BiHeart className="fill-white" size={20} />
                  <span className="text-xl">
                    85% <span className="text-base">(positive)</span>
                  </span>
                </div>
              </div>

              <div className="mt-5 md:mt-8 max-w-80">
                <button className="text-base w-full font-semibold py-2.5 px-7 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl">
                  Sign up to try
                </button>
                <div className="mt-6">
                  <button className="text-base w-full font-semibold py-2.5 px-7 border border-[#F4F4F4] rounded-xl">
                    View Demo store
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-white text-base">
              Last Updated - January 2, 2024
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          <div className="flex flex-col rounded-3xl overflow-hidden">
            <div
              className={`bg-gradient-to-t from-[#2e3b6e] to-[#4761CB] px-4 pt-9 pb-5 text-white`}
            >
              <h3 className="text-2xl text-center max-w-[215px] mx-auto font-bold mb-6">
                This tool Is great for
              </h3>
              <ul className="space-y-3 max-w-[215px] mx-auto text-base font-medium">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  High-volume stores
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  Quick setup
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  Visual storytelling
                </li>
              </ul>
            </div>
            <div className="bg-[#EFEFEF] p-6 rounded-3xl">
              <img
                src={img2}
                alt=""
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-3xl overflow-hidden">
            <div
              className={`bg-gradient-to-t from-[#2e3b6e] to-[#4761CB] px-4 pt-9 pb-5 text-white`}
            >
              <h3 className="text-2xl text-center max-w-[215px] mx-auto font-bold mb-6">
                This tool Is great for
              </h3>
              <ul className="space-y-3 max-w-[215px] mx-auto text-base font-medium">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  High-volume stores
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  Quick setup
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  Visual storytelling
                </li>
              </ul>
            </div>
            <div className="bg-[#EFEFEF] p-6 rounded-3xl">
              <img
                src={img2}
                alt=""
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-3xl overflow-hidden">
            <div
              className={`bg-gradient-to-t from-[#2e3b6e] to-[#4761CB] px-4 pt-9 pb-5 text-white`}
            >
              <h3 className="text-2xl text-center max-w-[215px] mx-auto font-bold mb-6">
                This tool Is great for
              </h3>
              <ul className="space-y-3 max-w-[215px] mx-auto text-base font-medium">
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  High-volume stores
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  Quick setup
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  Visual storytelling
                </li>
              </ul>
            </div>
            <div className="bg-[#EFEFEF] p-6 rounded-3xl">
              <img
                src={img2}
                alt=""
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeDetails;
