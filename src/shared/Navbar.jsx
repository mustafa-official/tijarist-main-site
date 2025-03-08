import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="py-2.5">
      <div className="flex flex-wrap items-center justify-between px-4 md:px-10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center  text-sm text-[#7230FF] rounded-lg lg:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div>
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-semibold">UIX</span>
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:order-2">
          <div className="flex rounded-xl bg-gradient-to-tr from-[#BD30FF] to-[#7230FF] p-[1px]">
            <button className="flex-1 font-semibold text-[#7230FF] text-[16px] bg-white px-5 py-2 rounded-xl">
              Signup
            </button>
          </div>
          <div>
            <button className="px-7 py-2.5 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] text-[16px] text-white font-semibold rounded-xl">
              Login
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
            {["Solutions", "Pricing", "About us", "Contact us", "Help"].map(
              (item, index) => (
                <li key={index}>
                  <Link
                    to={item === "Pricing" && "/pricing"}
                    className="block py-2 pl-3 pr-4 text-[16px] text-[#555151] lg:p-0"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
