import img1 from "../assets/theme1.png";
import img2 from "../assets/theme2.png";
import img3 from "../assets/theme3.png";
import icon1 from "../assets/themicon1.png";
import icon2 from "../assets/themicon2.png";
import icon3 from "../assets/themicon3.png";
import icon4 from "../assets/themicon4.png";
const Theme = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#FFD3C0] to-[#E3F8FF]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 py-10 md:py-12 lg:py-14">
            <div className="w-full lg:w-[40%]">
              <h2 className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl font-semibold ">
                <span className="text-[#00000099]">Build Your</span>{" "}
                <span className="text-black">Online Store</span>{" "}
                <span className="text-[#7E42FF]">Effortlessly</span>
              </h2>
              <p className="text-[#555151] text-center lg:text-left text-[18px] md:text-xl mt-6">
                Everything you need to create, customize, and launch your dream
                store in one place
              </p>
              <div className="mt-12 text-center lg:text-left">
                <button className="text-white px-12 sm:px-16 md:px-20 text-[16px] font-semibold py-4  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl transition-all">
                  Start Building now
                </button>
              </div>
              <p className="text-[#555151] text-center lg:text-left text-sm mt-3 md:text-base ">
                No coding required. Launch your store in minutes
              </p>
            </div>
            <div className="w-full lg:w-[60%]">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
        <div className="my-4">
          <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
            Why build with Tijarist
          </h2>
          <p className="text-[#555151] text-base text-center mt-2">
            Steps to Start Your Free Trial
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 items-center gap-4">
          <div className="bg-[#F4F4F4] border border-[#00000029] rounded-xl p-5">
            <div className="w-11 h-11 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-[4px] flex justify-center items-center">
              <img src={icon1} alt="" />
            </div>
            <h2 className="text-black text-xl md:text-2xl font-semibold mt-4 mb-2.5">
              User-Friendly Interface
            </h2>
            <p className="text-[#555151] text-sm md:text-base">
              Build your store with drag-and-drop tools—no technical skills
              needed.
            </p>
          </div>
          <div className="bg-[#F4F4F4] border border-[#00000029] rounded-xl p-5">
            <div className="w-11 h-11 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-[4px] flex justify-center items-center">
              <img src={icon2} alt="" />
            </div>
            <h2 className="text-black text-xl md:text-2xl font-semibold mt-4 mb-2.5">
              User-Friendly Interface
            </h2>
            <p className="text-[#555151] text-sm md:text-base">
              Build your store with drag-and-drop tools—no technical skills
              needed.
            </p>
          </div>
          <div className="bg-[#F4F4F4] border border-[#00000029] rounded-xl p-5">
            <div className="w-11 h-11 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-[4px] flex justify-center items-center">
              <img src={icon3} alt="" />
            </div>
            <h2 className="text-black text-xl md:text-2xl font-semibold mt-4 mb-2.5">
              User-Friendly Interface
            </h2>
            <p className="text-[#555151] text-sm md:text-base">
              Build your store with drag-and-drop tools—no technical skills
              needed.
            </p>
          </div>
          <div className="bg-[#F4F4F4] border border-[#00000029] rounded-xl p-5">
            <div className="w-11 h-11 bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-[4px] flex justify-center items-center">
              <img src={icon4} alt="" />
            </div>
            <h2 className="text-black text-xl md:text-2xl font-semibold mt-4 mb-2.5">
              User-Friendly Interface
            </h2>
            <p className="text-[#555151] text-sm md:text-base">
              Build your store with drag-and-drop tools—no technical skills
              needed.
            </p>
          </div>
        </div>
        <div className="mt-14 md:mt-16 lg:mt-20">
          <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
            Step-by-Step Process for Building Your Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 mt-6">
            {/* div1 (Bigger Width) */}
            <div
              style={{
                background:
                  "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
              }}
              className="p-6 md:p-10 rounded-xl flex flex-col"
            >
              <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-xl text-white flex justify-center items-center">
                1
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-8 flex-1">
                <div className="w-full lg:w-[40%]">
                  <h2 className="text-white text-xl md:text-2xl font-bold">
                    Choose Your Template
                  </h2>
                  <p className="text-[#C7C7C7] font-medium text-sm mt-3">
                    Select from our library of beautiful, industry-specific
                    templates.
                  </p>
                </div>
                <div className="w-full lg:w-[60%]">
                  <img src={img2} className="w-full object-cover" alt="" />
                </div>
              </div>
            </div>

            {/* div2 (Smaller Width) */}
            <div
              style={{
                background:
                  "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
              }}
              className="p-6 md:p-10 rounded-xl flex flex-col"
            >
              <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-xl text-white flex justify-center items-center">
                2
              </div>
              <div className="mt-8 flex-1 flex items-center justify-center">
                <img src={img3} className="w-full object-cover" alt="" />
              </div>
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold mt-3">
                  Customize Your Store
                </h2>
                <p className="text-[#C7C7C7] font-medium text-sm mt-3">
                  Add your logo, change colors, rearrange sections, and more
                  using our drag-and-drop editor.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4 mt-6">
            {/* div1  */}
            <div
              style={{
                background:
                  "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
              }}
              className="p-6 md:p-10 rounded-xl flex flex-col"
            >
              <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-xl text-white flex justify-center items-center">
                3
              </div>
              <div className="mt-8 flex-1 flex items-center justify-center">
                <img src={img3} className="w-full object-cover" alt="" />
              </div>
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold mt-3">
                  Add Products
                </h2>
                <p className="text-[#C7C7C7] font-medium text-sm mt-3">
                  Upload your products with detailed descriptions, pricing, and
                  high-quality images.
                </p>
              </div>
            </div>
            {/* div2 */}
            <div
              style={{
                background:
                  "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
              }}
              className="p-6 md:p-10 rounded-xl flex flex-col"
            >
              <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-xl text-white flex justify-center items-center">
                4
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-8 flex-1">
                <div className="w-full lg:w-[40%]">
                  <h2 className="text-white text-xl md:text-2xl font-bold">
                    Go Live and Sell
                  </h2>
                  <p className="text-[#C7C7C7] font-medium text-sm mt-3">
                    Publish your store and start reaching customers immediately.
                  </p>
                </div>
                <div className="w-full lg:w-[60%]">
                  <img src={img2} className="w-full object-cover" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-8 md:mt-12 lg:mt-16">
        <div className="bg-gradient-to-br from-black to-[#7E42FF] text-white py-14 md:py-16 lg:py-20">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-white text-2xl text-center font-semibold sm:text-[28px] md:text-3xl">
              Start Building Now
            </h2>
            <p className="text-white text-[16px] text-center my-5 md:my-8 md:text-[22px]">
              Start your own business with global networking from today{" "}
            </p>
            <div className="mt-4 text-center">
              <button className="text-[16px] font-semibold py-2.5 px-7  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl">
                Start your free trial
              </button>
            </div>
            <p className="text-sm sm:text-[16px] font-semibold text-white text-center mt-3">
              7 days free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
