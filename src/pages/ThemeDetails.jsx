import { BiHeart, BiStar } from "react-icons/bi";
import img1 from "../assets/themedetails1.png";
import img2 from "../assets/theme2.png";
import img5 from "../assets/theme5.png";
import img4 from "../assets/theme4.png";
import { LiaArrowLeftSolid, LiaArrowRightSolid } from "react-icons/lia";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";

const ThemeDetails = () => {
  const swiperRef = useRef(null);

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div>
      <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
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
        <div>
          <h2 className="font-semibold text-2xl md:text-3xl text-black">
            Features
          </h2>
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
                className={`bg-gradient-to-t from-[#3D2556] to-[#8551BC] px-4 pt-9 pb-5 text-white`}
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
                  src={img4}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="flex flex-col rounded-3xl overflow-hidden">
              <div
                className={`bg-gradient-to-t from-[#6AA6C3] to-[#334F5E] px-4 pt-9 pb-5 text-white`}
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
                  src={img5}
                  alt=""
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 lg:my-16">
          <h2 className="font-semibold text-2xl md:text-3xl text-black">
            Reviews
          </h2>
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={slidePrev}
              className="w-14 h-14 rounded-full border-2 border-[#7230FF] text-[#7230FF] text-2xl flex justify-center items-center"
            >
              <LiaArrowLeftSolid />
            </button>
            <button
              onClick={slideNext}
              className="w-14 h-14 rounded-full bg-gradient-to-t from-[#7230FF] to-[#BD30FF] text-white text-2xl flex justify-center items-center"
            >
              <LiaArrowRightSolid />
            </button>
          </div>
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              320: {
                slidesPerView: 1.3,
                spaceBetween: 18,
              },
            }}
            className="w-full mt-6"
          >
            <SwiperSlide>
              <div className="border border-[#00000040] rounded-2xl p-8 bg-[#F8F5F5] shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-stone-600">
                    {/* <img src={} alt="" /> */}
                  </div>
                  <div>
                    <h2 className="font-bold text-black text-[18px] sm:text-xl">
                      Mark Jones
                    </h2>
                    <p className="text-black text-[12px] sm:text-sm">
                      Founder & CEO
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
                    Best Work!
                  </h3>
                  <p className="text-[#555151] font-medium text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <p className="font-semibold text-[18px] md:text-xl text-black">
                      Company logo
                    </p>
                    <p className="font-extrabold flex items-center gap-2 text-[18px] md:text-xl text-[#FFD232]">
                      4.5 <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-black rounded-2xl p-8 bg-black shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-stone-600">
                    {/* <img src={} alt="" /> */}
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-[18px] sm:text-xl">
                      Mark Jones
                    </h2>
                    <p className="text-white text-[12px] sm:text-sm">
                      Founder & CEO
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
                    Best Work!
                  </h3>
                  <p className="text-[#D9D9D9] font-medium text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <p className="font-semibold text-[18px] md:text-xl text-white">
                      Company logo
                    </p>
                    <p className="font-extrabold flex items-center gap-2 text-[18px] md:text-xl text-[#FFD232]">
                      4.5 <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#00000040] rounded-2xl p-8 bg-[#F8F5F5] shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-stone-600">
                    {/* <img src={} alt="" /> */}
                  </div>
                  <div>
                    <h2 className="font-bold text-black text-[18px] sm:text-xl">
                      Mark Jones
                    </h2>
                    <p className="text-black text-[12px] sm:text-sm">
                      Founder & CEO
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
                    Best Work!
                  </h3>
                  <p className="text-[#555151] font-medium text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <p className="font-semibold text-[18px] md:text-xl text-black">
                      Company logo
                    </p>
                    <p className="font-extrabold flex items-center gap-2 text-[18px] md:text-xl text-[#FFD232]">
                      4.5 <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="border border-black rounded-2xl p-8 bg-black shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-stone-600">
                    {/* <img src={} alt="" /> */}
                  </div>
                  <div>
                    <h2 className="font-bold text-white text-[18px] sm:text-xl">
                      Mark Jones
                    </h2>
                    <p className="text-white text-[12px] sm:text-sm">
                      Founder & CEO
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
                    Best Work!
                  </h3>
                  <p className="text-[#D9D9D9] font-medium text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <p className="font-semibold text-[18px] md:text-xl text-white">
                      Company logo
                    </p>
                    <p className="font-extrabold flex items-center gap-2 text-[18px] md:text-xl text-[#FFD232]">
                      4.5 <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#00000040] rounded-2xl p-8 bg-[#F8F5F5] shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-stone-600">
                    {/* <img src={} alt="" /> */}
                  </div>
                  <div>
                    <h2 className="font-bold text-black text-[18px] sm:text-xl">
                      Mark Jones
                    </h2>
                    <p className="text-black text-[12px] sm:text-sm">
                      Founder & CEO
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
                    Best Work!
                  </h3>
                  <p className="text-[#555151] font-medium text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <p className="font-semibold text-[18px] md:text-xl text-black">
                      Company logo
                    </p>
                    <p className="font-extrabold flex items-center gap-2 text-[18px] md:text-xl text-[#FFD232]">
                      4.5 <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border border-[#00000040] rounded-2xl p-8 bg-[#F8F5F5] shadow-md">
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-stone-600">
                    {/* <img src={} alt="" /> */}
                  </div>
                  <div>
                    <h2 className="font-bold text-black text-[18px] sm:text-xl">
                      Mark Jones
                    </h2>
                    <p className="text-black text-[12px] sm:text-sm">
                      Founder & CEO
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
                    Best Work!
                  </h3>
                  <p className="text-[#555151] font-medium text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco{" "}
                  </p>
                  <div className="flex items-center justify-between mt-3 md:mt-4">
                    <p className="font-semibold text-[18px] md:text-xl text-black">
                      Company logo
                    </p>
                    <p className="font-extrabold flex items-center gap-2 text-[18px] md:text-xl text-[#FFD232]">
                      4.5 <FaStar />
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ThemeDetails;
