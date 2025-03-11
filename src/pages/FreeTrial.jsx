import img1 from "../assets/freetrial1.png";
import img2 from "../assets/theme2.png";
import img5 from "../assets/theme5.png";
import img4 from "../assets/theme4.png";
import icon1 from "../assets/themicon1.png";
import icon2 from "../assets/themicon2.png";
import icon3 from "../assets/themicon3.png";
import icon4 from "../assets/themicon4.png";
const FreeTrial = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="flex items-center flex-col-reverse lg:flex-row gap-6">
        <div className="w-full lg:w-[50%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-black">
            Your Business, Your Rules—Try Tijarist for Free Today
          </h2>
          <p className="text-lg md:text-xl text-[#555151] mt-3">
            Experience the full power of Tijarist with no commitment, no credit
            card required.
          </p>

          <form className="mt-10 max-w-[450px] py-0.5 pl-6 pr-3.5 rounded-full flex border border-[#555151]">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent w-full text-base focus:outline-none pr-4 border-0 focus:ring-0 px-0 py-0"
              name="topic"
            />
            <button className="flex flex-row items-center justify-center min-w-[160px] px-4 rounded-full  tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-gradient-to-r from-[#BD30FF] to-[#7230FF] font-medium text-white  tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
              Start free trial
            </button>
          </form>
          <p className="text-[#555151] text-sm md:text-sm mt-3">
            By entering your email, you agree to receive marketing emails from
            Tijarist
          </p>
        </div>
        <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
          <img src={img1} alt="" />
        </div>
      </div>

      <div className="my-10 lg:mt-16">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
          How It Works
        </h2>
        <p className="text-[#555151] text-base text-center mt-3">
          Steps to Start Your Free Trial
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4">
        <div
          style={{
            background:
              "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
          }}
          className="p-5 rounded-xl flex flex-col h-full"
        >
          <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-base font-bold text-white flex justify-center items-center">
            1
          </div>
          <div className="mt-8 flex-1 flex items-center justify-center">
            <img src={img2} className="w-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold mt-3">
              Signup
            </h2>
            <p className="text-[#C7C7C7] font-medium text-sm mt-3">
              Enter your email and basic details—no credit card required.
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
          }}
          className="p-5 rounded-xl flex flex-col h-full"
        >
          <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-base font-bold text-white flex justify-center items-center">
            2
          </div>
          <div className="mt-8 flex-1 flex items-center justify-center">
            <img src={img5} className="w-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold mt-3">
              Customize Your Store
            </h2>
            <p className="text-[#C7C7C7] font-medium text-sm mt-3">
              Choose a template, upload products, and design your storefront.
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "radial-gradient(ellipse at center, #7230FFCC 10%, black 60%)",
          }}
          className="p-5 rounded-xl flex flex-col h-full"
        >
          <div className="w-10 h-10 bg-[#BD30FF] rounded-[4px] text-base font-bold text-white flex justify-center items-center">
            3
          </div>
          <div className="mt-8 flex-1 flex items-center justify-center">
            <img src={img4} className="w-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold mt-3">
              Explore and Sell
            </h2>
            <p className="text-[#C7C7C7] font-medium text-sm mt-3">
              Go live with your store, explore marketing tools, and track sales
              with real-time analytics
            </p>
          </div>
        </div>
      </div>
      <div className="my-10 lg:mt-16">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
          What’s Included in Your Free Trial?
        </h2>
        <p className="text-[#555151] text-base text-center mt-3">
          Steps to Start Your Free Trial
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 items-stretch gap-4">
        {[
          {
            icon: icon1,
            title: "Full Access to Tools",
            text: "Build your store with all Tijarist features.",
            gradient: "from-[#BD30FF] to-[#7230FF]",
          },
          {
            icon: icon2,
            title: "No Limitations",
            text: "Upload unlimited products, customize templates, and explore advanced analytics.",
            gradient: "from-[#4761CB] to-[#7E42FF]",
          },
          {
            icon: icon3,
            title: "Dedicated Support",
            text: "Get help from our team via live chat or email.",
            gradient: "from-[#4761CB] to-[#7E42FF]",
          },
          {
            icon: icon4,
            title: "Real-Time Analytics",
            text: "Test and track your performance during the trial.",
            gradient: "from-[#BD30FF] to-[#7230FF]",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`relative h-full bg-gradient-to-tr ${item.gradient} rounded-xl p-[2px]`}
          >
            <div className="bg-white p-4 rounded-[10px] h-full flex flex-col">
              <div className="w-11 h-11 bg-gradient-to-t from-[#7E42FF] to-[#4761CB] rounded-[4px] flex justify-center items-center">
                <img src={item.icon} alt="" />
              </div>
              <h2 className="text-black text-xl font-semibold mt-4 mb-2.5">
                {item.title}
              </h2>
              <p className="text-[#555151] text-sm md:text-base flex-1">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeTrial;
