import { FaStar } from "react-icons/fa";

const CustomerReview = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-left">
          Our customers Love us
        </h2>
        <p className="text-[#555151] text-base text-left mt-3">
          From building your first website and registering your domain to
          setting up a professional email address,
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <div className="border border-[#00000040] rounded-2xl p-8 bg-[#F8F5F5] shadow-md">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-stone-600">
              {/* <img src={} alt="" /> */}
            </div>
            <div>
              <h2 className="font-bold text-black text-[18px] sm:text-xl">
                Mark Jones
              </h2>
              <p className="text-black text-[12px] sm:text-sm">Founder & CEO</p>
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
              Best Work!
            </h3>
            <p className="text-[#555151] font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
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
        <div className="border border-black rounded-2xl p-8 bg-black shadow-md">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-stone-600">
              {/* <img src={} alt="" /> */}
            </div>
            <div>
              <h2 className="font-bold text-white text-[18px] sm:text-xl">
                Mark Jones
              </h2>
              <p className="text-white text-[12px] sm:text-sm">Founder & CEO</p>
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
              Best Work!
            </h3>
            <p className="text-[#D9D9D9] font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
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
        <div className="border border-[#00000040] rounded-2xl p-8 bg-[#F8F5F5] shadow-md">
          <div className="flex items-center gap-6">
            <div className="w-10 h-10 rounded-full bg-stone-600">
              {/* <img src={} alt="" /> */}
            </div>
            <div>
              <h2 className="font-bold text-black text-[18px] sm:text-xl">
                Mark Jones
              </h2>
              <p className="text-black text-[12px] sm:text-sm">Founder & CEO</p>
            </div>
          </div>
          <div>
            <h3 className="font-extrabold text-xl md:text-2xl my-3 md:my-4">
              Best Work!
            </h3>
            <p className="text-[#555151] font-medium text-base ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
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
      </div>
    </div>
  );
};

export default CustomerReview;
