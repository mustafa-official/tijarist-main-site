import img1 from "../assets/marketproduct1.png";
import img2 from "../assets/marketproduct2.png";
import img3 from "../assets/marketproduct3.png";
import img4 from "../assets/marketproduct4.png";
import img5 from "../assets/marketproduct5.png";
import img6 from "../assets/marketproduct6.png";

const MarketProduct = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="my-4">
          <h2 className="font-bold text-2xl md:text-[28px] lg:text-4xl text-black text-center">
            Sell your products everywhere
          </h2>
          <p className="text-center text-[#555151] font-medium text-[16px] sm:text-[18px] mt-5 mb-3">
            One platform that lets you sell wherever your customers are
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
              Sell Online
            </h2>
            <p className="text-[#555151] font-medium text-[16px] sm:text-[18px] mt-4 mb-3">
              With the highest-converting checkout and flexible options for
              every size of business, Shopify stores sell more products, lower
              your costs, and save you time
            </p>
            <p className="text-[#555151] text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </div>
          <div className="w-full md:w-[60%]">
            <img src={img2} className="w-full" alt="" />
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-6">
          <div className="w-full md:w-[60%] relative">
            <img
              src={img3}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-md rounded-xl p-4 -mt-[150px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Sell Across Channels
              </h3>
              <p className="text-black text-xs md:text-sm mt-2">
                Sync your product catalog to the leading marketplaces, then
                easily manage and fulfill every order in one central place.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative">
            <img
              src={img4}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-lg rounded-xl p-4 -mt-[150px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Sell Globally
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-3">
                Control your international storefronts and optimize for every
                region you sell to efficiently with a single store and central
                back office
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-6">
          <div className="w-full md:w-[40%] relative">
            <img
              src={img5}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-md rounded-xl p-4 -mt-[130px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                POS for every sale
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-2">
                Sell everywhere people shop with the best omnichannel POS system
              </p>
            </div>
          </div>
          <div className="w-full md:w-[60%] relative">
            <img
              src={img6}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-lg rounded-xl p-4 -mt-[130px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Accept online payment
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-3">
                With our online payment partners you can receive money online
                from anywhere
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

export default MarketProduct;
