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
            Market your products easily
          </h2>
          <p className="text-center text-[#555151] font-medium text-[16px] sm:text-[18px] mt-5 mb-3">
            Find more customers, build profitable relationships, and make
            strategic decisions with unbiased data
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
              Social media marketing
            </h2>
            <p className="text-[#555151] font-medium text-[16px] sm:text-[18px] mt-4 mb-3">
              Share your products directly from Shopify to social platforms
            </p>
            <p className="text-[#555151] text-sm leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
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
                Chat with customers
              </h3>
              <p className="text-black text-xs md:text-sm mt-2">
                Manage customer conversations, create automated messages, and
                get insights to focus on chats that convert
              </p>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative">
            <img
              src={img4}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-lg rounded-xl p-4 -mt-[116px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Know your audience
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-3">
                Understand your data better and act on it for free
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
                Risk free ad-campaign
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-2">
                Target shoppers across Meta, Google Set your target and let Shop
                do the rest.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[60%] relative">
            <img
              src={img6}
              className="rounded-3xl w-full h-[385px] object-cover"
              alt=""
            />
            <div className="absolute max-w-[360px] bg-[#FFFFFF4D] backdrop-blur-lg rounded-xl p-4 -mt-[116px] ml-4 sm:ml-6 mr-4">
              <h3 className="text-black font-semibold text-sm md:text-base lg:text-[18px]">
                Drive sales with influencers
              </h3>
              <p className="text-[#555151] text-xs md:text-sm mt-3">
                Find and manage influential creators and collab
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
