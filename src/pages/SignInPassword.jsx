import icon1 from "../assets/signin-icon.png";
import img1 from "../assets/signin.jpeg";
import img2 from "../assets/customergrowth.png";
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const SignInPassword = () => {
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
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="flex items-center flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-lg">
                <img src={icon1} alt="" />
              </div>
              <h1 className="text-2xl mt-2 md:text-3xl text-black font-semibold">
                Welcome to Tijarist
              </h1>
              <p className="text-[#555151] font-medium text-xl mt-3 mb-8">
                Lets sign you in
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-black mb-3"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-[#F3F3F3] text-sm rounded-lg border border-[#0000001A] outline-none"
                  placeholder="Enter password"
                />
              </div>

              <button
                type="submit"
                className="w-full font-semibold text-base bg-gradient-to-r from-[#BD30FF] to-[#7230FF] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
              >
                Sign in
              </button>
            </form>

            <p className="text-center mt-5 text-sm text-[#555151]">
              Forgot Password?{" "}
              <a href="#" className="font-medium text-black underline">
                Reset
              </a>
            </p>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="w-full lg:w-[60%] bg-cover bg-center h-[750px] lg:h-[900px] rounded-3xl flex flex-col gap-10 justify-center items-center"
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              1024: {
                slidesPerView: 2, // Show 3 slides at a time
                spaceBetween: 20,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              320: {
                slidesPerView: 1, // Stack slides on small screens
                spaceBetween: 10,
              },
            }}
            className="w-full mt-6"
          >
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-6 py-5">
                <h2 className="text-black text-lg md:text-xl font-semibold">
                  Customers Growth
                </h2>
                <p className="text-[#ACACAC] text-sm mt-1">By Location</p>
                <div className="flex justify-center items-center mb-3 mt-5">
                  <img src={img2} className="w-[55%]" alt="" />
                </div>
                <div className="p-2">
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Bangladesh</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FE8112] rounded-full"
                        style={{ width: `${(450 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">USA</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FCD4B0] rounded-full"
                        style={{ width: `${(220 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Germany</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#F9A255] rounded-full"
                        style={{ width: `${(320 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-6 py-5">
                <h2 className="text-black text-lg md:text-xl font-semibold">
                  Customers Growth
                </h2>
                <p className="text-[#ACACAC] text-sm mt-1">By Location</p>
                <div className="flex justify-center items-center mb-3 mt-5">
                  <img src={img2} className="w-[55%]" alt="" />
                </div>
                <div className="p-2">
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Bangladesh</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FE8112] rounded-full"
                        style={{ width: `${(450 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">USA</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FCD4B0] rounded-full"
                        style={{ width: `${(220 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Germany</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#F9A255] rounded-full"
                        style={{ width: `${(320 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-6 py-5">
                <h2 className="text-black text-lg md:text-xl font-semibold">
                  Customers Growth
                </h2>
                <p className="text-[#ACACAC] text-sm mt-1">By Location</p>
                <div className="flex justify-center items-center mb-3 mt-5">
                  <img src={img2} className="w-[55%]" alt="" />
                </div>
                <div className="p-2">
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Bangladesh</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FE8112] rounded-full"
                        style={{ width: `${(450 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">USA</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FCD4B0] rounded-full"
                        style={{ width: `${(220 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Germany</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#F9A255] rounded-full"
                        style={{ width: `${(320 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-6 py-5">
                <h2 className="text-black text-lg md:text-xl font-semibold">
                  Customers Growth
                </h2>
                <p className="text-[#ACACAC] text-sm mt-1">By Location</p>
                <div className="flex justify-center items-center mb-3 mt-5">
                  <img src={img2} className="w-[55%]" alt="" />
                </div>
                <div className="p-2">
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Bangladesh</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FE8112] rounded-full"
                        style={{ width: `${(450 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">USA</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FCD4B0] rounded-full"
                        style={{ width: `${(220 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Germany</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#F9A255] rounded-full"
                        style={{ width: `${(320 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white rounded-3xl px-6 py-5">
                <h2 className="text-black text-lg md:text-xl font-semibold">
                  Customers Growth
                </h2>
                <p className="text-[#ACACAC] text-sm mt-1">By Location</p>
                <div className="flex justify-center items-center mb-3 mt-5">
                  <img src={img2} className="w-[55%]" alt="" />
                </div>
                <div className="p-2">
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Bangladesh</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FE8112] rounded-full"
                        style={{ width: `${(450 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="mb-2.5">
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">USA</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#FCD4B0] rounded-full"
                        style={{ width: `${(220 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex text-sm mb-1">
                      <span className="text-black text-sm">Germany</span>
                    </div>
                    <div className="h-2 bg-[#D9D9D9] rounded-full">
                      <div
                        className="h-full bg-[#F9A255] rounded-full"
                        style={{ width: `${(320 / 500) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="px-7 py-5 bg-[#00000033] backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-between flex-wrap">
                <h2 className="text-white border border-white rounded-full px-2.5 py-1 font-normal text-base">
                  Growth
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={slidePrev}
                    className="w-10 h-10 rounded-full border border-white flex justify-center items-center"
                  >
                    <GoArrowDownLeft color="white" className="w-4 h-4" />
                  </button>
                  <button
                    onClick={slideNext}
                    className="w-10 h-10 rounded-full border border-white flex justify-center items-center"
                  >
                    <GoArrowUpRight color="white" className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-[#EFEFEF] font-medium text-md mt-7">
                  Experience the full power of Tijarist with no commitment, no
                  credit card required.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPassword;
