import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="mb-4 lg:text-left text-center">
        <h2 className="inline-block px-4 py-2 rounded-full border border-black text-black text-base font-semibold">
          Contact Us
        </h2>
        <p className="mt-3 text-[#555151] font-medium text-base">
          Contact us for further inquiry or any collaboration
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        {/* Left Section - Contact Info */}
        <div className="lg:w-1/3">
          <div className="bg-[#13113F] text-white rounded-3xl p-8 h-full">
            {/* Email Section */}
            <div className="mb-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300">Company2@email.Com</p>
            </div>

            {/* Visit Section */}
            <div className="mb-8 text-center">
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300">
                Range Paramount, Level 11
                <br />
                Block-K, Plot-11 Rd No 17,
                <br />
                Dhaka 1213
              </p>
            </div>

            {/* Call Section */}
            <div className="mb-12 text-center">
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300">+8801655977550</p>
              <p className="text-gray-300">+8801655977550</p>
            </div>

            {/* Follow Us Section */}
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-[#1E5FC0] underline font-semibold text-base "
                >
                  Follow Us On Facebook
                </a>
                <a
                  href="#"
                  className="block text-[#1E5FC0] underline font-semibold text-base "
                >
                  Follow Us On Instagram
                </a>
                <a
                  href="#"
                  className="block text-[#1E5FC0] underline font-semibold text-base "
                >
                  Follow Us On X
                </a>
                <a
                  href="#"
                  className="block text-[#1E5FC0] underline font-semibold text-base "
                >
                  Subscribe To Our YoutubeChannel
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-center text-[#7230FF] mb-2">
              Get In Touch
            </h2>
            <p className="text-[#555151] mb-8 text-center">
              Send us a message, well respond in 24 hour
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-base font-semibold text-black mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-lg border border-[#B6B6B699] outline-none"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-base font-semibold text-black mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-lg border border-[#B6B6B699] outline-none"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-semibold text-black mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-[#B6B6B699] outline-none"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-base font-semibold text-black mb-2"
                >
                  Mobile Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 py-3 rounded-l-lg border border-r-0 border-[#B6B6B699] bg-gray-50 text-gray-500 text-sm">
                    +880
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-r-lg border border-[#B6B6B699] outline-none"
                    placeholder="165 5555 555"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-semibold text-black mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-[#B6B6B699] outline-none"
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <button className="w-full text-white text-[16px] font-semibold py-4  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl transition-all">
                Submit now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
