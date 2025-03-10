import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqs1 = [
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
  {
    question: "What are the system requirement?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="mb-4 lg:text-left text-center">
        <h2 className="inline-block px-4 py-2 rounded-full border border-black text-black text-base font-semibold">
          FAQ
        </h2>
        <p className="mt-3 text-[#555151] font-medium text-base">
          Look for answers for any problem or ques you face
        </p>
      </div>
      <div className="mt-8 lg:text-left text-center">
        <h2 className="font-semibold text-2xl md:text-3xl text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-[#555151] text-base mt-3">
          From building your first website and registering your domain to
          setting up a professional email address,
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-5 mt-8 md:mt-10">
        {faqs1.map((faq, index) => (
          <div
            key={index}
            className="accordion border border-[#00000033] px-5 bg-[#F4F4F4] rounded-xl"
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
                openIndex === index ? "pb-4 max-h-screen" : "max-h-0 invisible"
              }`}
            >
              <p className="text-sm text-black">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
