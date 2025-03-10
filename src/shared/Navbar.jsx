import { useEffect, useRef, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import icon1 from "../assets/launch1.png";
import icon2 from "../assets/launch2.png";
import icon3 from "../assets/launch3.png";
import icon4 from "../assets/launch4.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            {/* Solutions Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="block py-2 pl-3 pr-4 text-[16px] text-[#555151] lg:p-0 flex items-center"
              >
                Solutions
                <svg
                  className="ml-2 w-3.5 h-3.5 transition-transform duration-300 ease-in-out"
                  style={{
                    transform: isDropdownOpen
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute left-0 mt-6 w-72 bg-white border shadow-lg rounded-lg px-2 overflow-hidden transform transition-all duration-300 ease-in-out ${
                  isDropdownOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 -translate-y-5 scale-95 pointer-events-none"
                }`}
              >
                {[
                  {
                    icon: icon1,
                    label: "Start your business",
                    link: "start-business",
                  },
                  {
                    icon: icon2,
                    label: "Sell your product",
                    link: "sell-product",
                  },
                  {
                    icon: icon3,
                    label: "Market your product",
                    link: "market-product",
                  },
                  {
                    icon: icon4,
                    label: "Manage your business",
                    link: "manage-business",
                  },
                ].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center p-2 border-b last:border-b-0"
                  >
                    <div className="text-xl mr-3 w-10 h-10 border-2 border-[#7E42FF] rounded-2xl flex justify-center items-center p-1">
                      <img src={item.icon} alt="" />
                    </div>
                    <span className="text-[16px] text-black">{item.label}</span>
                    <span className="ml-auto text-black">
                      <GoChevronRight />
                    </span>
                  </Link>
                ))}
              </div>
            </li>

            {/* Other Navbar Items */}
            {[
              { name: "Pricing", path: "pricing" },
              { name: "About us", path: "about-us" },
              { name: "Contact us", path: "contact" },
              { name: "Help", path: "help" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 pl-3 pr-4 text-[16px] text-[#555151] lg:p-0"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
