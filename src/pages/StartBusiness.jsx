import img1 from "../assets/startbusiness1.png";
import img3 from "../assets/startbusiness3.png";
import img4 from "../assets/startbusiness4.jpeg";
import img5 from "../assets/startbusiness5.jpeg";
import img6 from "../assets/startbusiness6.png";
import img7 from "../assets/startbusiness7.jpeg";
const StartBusiness = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="my-4">
          <h2 className="font-bold text-2xl md:text-[28px] lg:text-4xl text-black text-center">
            Ready To start your business ?
          </h2>
          <p className="text-center text-[#555151] font-medium text-[16px] sm:text-[18px] mt-5 mb-3">
            Get up and running fast with easy to use tools to build your brand.
          </p>
          <p className="text-[#555151] text-sm text-center max-w-[630px] mx-auto leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-8 text-center">
            <button className="text-[16px] font-semibold py-3 px-7 text-white  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl">
              Start your free trial
            </button>
          </div>
          <p className="text-sm sm:text-[16px] font-semibold text-[#555151] text-center mt-3">
            7 days free trial
          </p>
          <div className="max-w-[800px] mx-auto mt-4 sm:mt-6 md:mt-8">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="flex items-center flex-col-reverse md:flex-row gap-6 md:gap-8 lg:gap-10 justify-between mt-10 sm:mt-14 md:mt-20">
          <div className="w-full md:w-[40%]">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-black ">
              Build your online store
            </h2>
            <p className="text-[#555151] font-medium text-[16px] sm:text-[18px] mt-4 mb-3">
              Effortlessly build and customize your online store to suit your
              brand’s unique identity
            </p>
            <p className="text-[#555151] text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <div className="mt-5">
              <button className="text-[16px] font-semibold py-3 px-7 text-white  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <img src={img3} className="w-full" alt="" />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-6">
          <div className="w-full md:w-[60%] relative">
            <img
              src={img4}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-md rounded-xl p-4 -mt-[128px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Build an online Website
              </h3>
              <p className="text-black text-xs md:text-sm mt-2">
                Personalize your design with drag-and-drop tools that make your
                online store shine.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative">
            <img
              src={img5}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-lg rounded-xl p-4 -mt-[116px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Choose a store theme
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-3">
                Browse a wide range of free and paid themes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-6">
          <div className="w-full md:w-[40%] relative">
            <img
              src={img6}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-md rounded-xl p-4 -mt-[130px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Customize as you like
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-2">
                Add more features to your store with apps from trusted Shopify
                partners.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[60%] relative">
            <img
              src={img7}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-lg rounded-xl p-4 -mt-[130px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Level up with apps
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-3">
                Add more features to your store with apps from trusted Shopify
                partners.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* start selling */}
      <div className="my-8 md:mt-12 lg:mt-16">
        <div className="bg-gradient-to-br from-black to-[#7E42FF] text-white py-14 md:py-16 lg:py-20">
          {/* Main Content */}
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-white text-2xl text-center font-semibold sm:text-[28px] md:text-3xl">
              Start Selling From Today
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

export default StartBusiness;
