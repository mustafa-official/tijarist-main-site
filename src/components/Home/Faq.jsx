import { useState } from "react";
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

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-left">
          Frequently Asked Questions
        </h2>
        <p className="text-[#555151] text-base text-left mt-3">
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
