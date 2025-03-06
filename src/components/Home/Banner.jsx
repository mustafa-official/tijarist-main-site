import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

const Banner = () => {
  return (
    <div className="px-4">
      <div className="bg-gradient-to-b rounded-3xl from-black via-purple-900 to-black mt-4">
        {/* Main Banner Section */}
        <div className="px-4 pt-16 md:pt-24 flex flex-col items-center justify-center text-center">
          {/* Heading Section */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 leading-[50px]">
            Build Your Dream
            <br />
            Store, Effortlessly
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-medium text-[#FFD232] mb-8">
            No Typing Required!
          </h2>

          {/* CTA Button */}
          <div className="flex justify-center items-center gap-1">
            <button className="group bg-white text-black px-8 py-3 rounded-full font-medium text-lg md:text-xl hover:bg-gray-100 transition-all duration-300">
              Start Your Free Trial
            </button>
            <button className="group bg-white text-black py-3.5 px-3.5 rounded-full font-medium text-lg md:text-[22px] hover:bg-gray-100 transition-all duration-300">
              <MdArrowOutward />
            </button>
          </div>

          {/* Trial Info */}
          <p className="text-[#D9D9D9] text-sm text-center mt-4">
            7 Days Free Trial | Cancel Anytime
          </p>

          {/* Demo Image */}
          <div className="mt-8 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Dashboard Preview"
              className="w-full h-[270px] sm:h-[370px] object-cover border-[12px] border-[#775eac] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
