import { useState } from "react";
import img1 from "../assets/affiliate1.png";
import icon1 from "../assets/affiliateicon1.png";
import icon2 from "../assets/affiliateicon2.png";
import icon4 from "../assets/affiliateicon4.png";
import img2 from "../assets/affiliateiconimage.png";
import img3 from "../assets/affiliateimg3.png";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What are the dates and locations for the product launch events?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "Can I bring a guest with me to the product launch event?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "How can I register for the event?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
];
const Affiliate = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black">
            Become an Affiliate{" "}
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mt-2">
            <span className="text-[#BD30FF]">Earn</span> From Home
          </h2>
          <p className="text-[#555151] mt-6 max-w-[450px] leading-8 text-sm md:text-base font-medium">
            ”Experience the full power of Tijarist with no commitment, no credit
            card required.”
          </p>
          <div className="mt-6">
            <button className="px-7 py-2.5 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] text-[16px] text-white font-semibold rounded-xl">
              Apply Now
            </button>
          </div>
          <div className="flex items-center gap-2 justify-between max-w-[450px] mt-8">
            <div className="flex items-center flex-col gap-1">
              <h1 className="text-2xl md:text-3xl font-bold text-black">30k</h1>
              <p className="text-[#555151] text-sm md:text-base font-medium ">
                Total affiliate
              </p>
            </div>
            <div className="flex items-center flex-col gap-1">
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                12k+
              </h1>
              <p className="text-[#555151] text-sm md:text-base font-medium ">
                Courses sold
              </p>
            </div>
            <div className="flex items-center flex-col gap-1">
              <h1 className="text-2xl md:text-3xl font-bold text-black">
                15k+
              </h1>
              <p className="text-[#555151] text-sm md:text-base font-medium ">
                Average Income
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={img1} className="w-full" alt="" />
        </div>
      </div>
      <div className="my-12 md:my-16">
        <h2 className="text-black text-2xl font-bold text-center">
          Affiliate Programme
        </h2>
        <p className="text-[#555151] text-base max-w-[575px] mt-4 mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-6 md:mt-8">
          <div className="bg-white rounded-xl border border-[#00000040] flex flex-col justify-center items-center px-2 py-8 md:py-12">
            <div className="bg-[#2FBEF2] w-11 h-11 flex justify-center items-center rounded-[4px]">
              <img src={icon1} alt="" />
            </div>
            <h2 className="text-black font-medium my-4 text-lg sm:text-xl">
              Register new Account
            </h2>
            <p className="text-[#555151] text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#00000040] flex flex-col justify-center items-center px-2 py-8 md:py-12">
            <div className="bg-[#F58A25] w-11 h-11 flex justify-center items-center rounded-[4px]">
              <img src={icon2} alt="" />
            </div>
            <h2 className="text-black font-medium my-4 text-lg sm:text-xl">
              Post Link
            </h2>
            <p className="text-[#555151] text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="bg-white rounded-xl border border-[#00000040] flex flex-col justify-center items-center px-2 py-8 md:py-12">
            <div className="bg-[#4761CB] w-11 h-11 flex justify-center items-center rounded-[4px]">
              <img src={icon1} alt="" />
            </div>
            <h2 className="text-black font-medium my-4 text-lg sm:text-xl">
              Earn money
            </h2>
            <p className="text-[#555151] text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>
      <div className="my-12 md:my-16">
        <h2 className="text-black text-2xl font-bold">
          Why Join our affiliate programme ?
        </h2>
        <p className="text-[#555151] text-base max-w-[575px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="p-6 rounded-lg bg-[#03346E] lg:col-span-5">
          <div className="flex items-start gap-4">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-medium text-white">
                Earn from home
              </h3>
              <p className="text-sm text-[#D9D9D9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-[#1A3636] lg:col-span-3">
          <div className="flex items-start gap-4">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-medium text-white">
                Online Payment
              </h3>
              <p className="text-sm text-[#D9D9D9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-white text-gray-900 lg:col-span-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-[#F58A25] w-11 h-11 flex justify-center items-center rounded-[4px]">
                <img src={icon4} alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl md:text-3xl font-bold text-black">
                  15K+
                </h1>
                <p className="text-[#555151] text-sm md:text-base font-medium ">
                  Average income
                </p>
              </div>
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <div className="bg-[#2E236C] rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-medium text-white">
              Interactive Dashboard
            </h3>
            <p className="text-sm text-[#D9D9D9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
        </div>

        <div className="bg-[#49243E] rounded-lg p-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-medium text-white">
              Level Wise Commission Structure
            </h3>
            <p className="text-sm text-[#D9D9D9]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 md:my-16">
        <div className="my-4">
          <h2 className="text-black text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-[#555151] text-base mt-4">
            From building your first website and registering your domain to
            setting up a professional email address,
          </p>
        </div>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="accordion border border-[#00000033] px-6 sm:px-10 md:px-12 mt-3 bg-[#F4F4F4] rounded-xl"
              role="accordion"
            >
              <button
                type="button"
                className={`toggle-button w-full text-base outline-none text-left py-6 flex items-center  ${
                  openIndex === index ? "text-[#7230FF]" : "text-black"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="mr-4">{faq.question}</span>
                {openIndex === index ? (
                  <FiMinus className="w-5 h-5 ml-auto shrink-0 text-black" />
                ) : (
                  <FiPlus className="w-5 h-5 ml-auto shrink-0 text-black" />
                )}
              </button>
              <div
                className={`content overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "pb-4 max-h-screen"
                    : "max-h-0 invisible"
                }`}
              >
                <p className="text-sm text-black">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
