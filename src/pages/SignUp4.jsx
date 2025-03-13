import { useState } from "react";
import { FiCheck } from "react-icons/fi";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const SignUp4 = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-3xl mx-auto px-4">
      <div className="bg-white py-8 px-8 rounded-3xl">
        <h2 className="text-xl md:text-2xl font-medium text-black">
          What size is your Business
        </h2>
        <p className="text-[#555151] font-medium text-base mt-4 mb-3.5">
          We’ll make sure you’re all set up to see in these places
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-5 gap-y-5 items-stretch">
          <div className="h-full">
            <label className="relative cursor-pointer w-80">
              <input
                type="radio"
                name="selling-status"
                value="online-store"
                checked={selected === "online-store"}
                onChange={(e) => setSelected(e.target.value)}
                className="hidden"
              />
              <div
                className={`w-full min-h-[160px] p-6 border rounded-xl transition-colors flex flex-col relative 
                         ${
                           selected === "online-store"
                             ? "border-[#7230FF] shadow-[0px_0px_18px_1px_#7230FF33]"
                             : "hover:border-[#7230FF]"
                         }`}
              >
                {/* Radio Button in Top-Right Corner */}
                <div className="absolute top-4 right-4">
                  {selected === "online-store" ? (
                    <div className="w-6 h-6 rounded-full bg-[#7230FF] flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  )}
                </div>

                <div className="flex-grow flex flex-col justify-center ">
                  <p className="font-medium text-base md:text-xl text-black text-center">
                    Small
                  </p>
                  <p className="text-[#555151] text-sm md:text-base mt-2 text-center">
                    Less than $250k anually
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div className="h-full">
            <label className="relative cursor-pointer w-80">
              <input
                type="radio"
                name="retailStore"
                value="retail-store"
                checked={selected === "retail-store"}
                onChange={(e) => setSelected(e.target.value)}
                className="hidden"
              />
              <div
                className={`w-full min-h-[160px] p-6 border rounded-xl transition-colors flex flex-col relative 
                         ${
                           selected === "retail-store"
                             ? "border-[#7230FF] shadow-[0px_0px_18px_1px_#7230FF33]"
                             : "hover:border-[#7230FF]"
                         }`}
              >
                {/* Radio Button in Top-Right Corner */}
                <div className="absolute top-4 right-4">
                  {selected === "retail-store" ? (
                    <div className="w-6 h-6 rounded-full bg-[#7230FF] flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  )}
                </div>
                <div className="flex-grow flex flex-col justify-center ">
                  <p className="font-medium text-base md:text-xl text-black text-center">
                    Medium
                  </p>
                  <p className="text-[#555151] text-sm md:text-base mt-2 text-center">
                    $250k - $1M Anually
                  </p>
                </div>
              </div>
            </label>
          </div>
          <div className="h-full">
            <label className="relative cursor-pointer w-80">
              <input
                type="radio"
                name="events"
                value="events"
                checked={selected === "events"}
                onChange={(e) => setSelected(e.target.value)}
                className="hidden"
              />
              <div
                className={`w-full min-h-[160px] p-6 border rounded-xl transition-colors flex flex-col relative 
                         ${
                           selected === "events"
                             ? "border-[#7230FF] shadow-[0px_0px_18px_1px_#7230FF33]"
                             : "hover:border-[#7230FF]"
                         }`}
              >
                {/* Radio Button in Top-Right Corner */}
                <div className="absolute top-4 right-4">
                  {selected === "events" ? (
                    <div className="w-6 h-6 rounded-full bg-[#7230FF] flex items-center justify-center">
                      <FiCheck className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  )}
                </div>
                <div className="flex-grow flex flex-col justify-center ">
                  <p className="font-medium text-base md:text-xl text-black text-center">
                    Large
                  </p>
                  <p className="text-[#555151] text-sm md:text-base mt-2 text-center">
                    More than $1M anually
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="mt-5 sm:mt-7 flex items-center gap-2.5 justify-end">
          <button className="flex items-center justify-center gap-2 bg-[#4761CB] text-white rounded-lg min-w-28 h-10 text-sm font-semibold">
            <HiArrowLeft className="w-4 h-4" /> Back
          </button>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] text-white rounded-lg min-w-28 h-10 text-sm font-semibold">
            Next <HiArrowRight className="w-4 h-4" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp4;
