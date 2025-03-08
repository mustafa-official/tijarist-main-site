import img from "../../assets/platform.png";
const FirstProduct = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16">
      <div className="bg-gradient-to-br from-black to-[#1d0638] text-white py-12 lg:py-14">
        {/* Main Content */}
        <div className="flex justify-between flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto px-4">
          {/* Left Content */}
          <div>
            <div className="space-y-5">
              <p className="px-5 py-3 rounded-3xl border border-white bg-white text-black font-medium text-xl cursor-pointer">
                Add Your First Product
              </p>
              <p className="px-5 py-3 rounded-3xl border border-[#C7C7C7]  text-[#C7C7C7] font-medium text-xl cursor-pointer">
                Customize your store
              </p>
              <p className="px-5 py-3 rounded-3xl border border-[#C7C7C7]  text-[#C7C7C7] font-medium text-xl cursor-pointer">
                Set up payments
              </p>
            </div>
            <div className="flex items-center gap-4 mt-10 md:mt-12 lg:mt-14">
              <button className="text-[16px] font-semibold py-2.5 px-6  bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-xl">
                Start your free trial
              </button>
              <button className="text-[16px] font-semibold py-2.5 px-6  bg-[#EFEFEF4D] rounded-xl">
                Start your free trial
              </button>
            </div>
          </div>
          {/* Right Content */}
          <div>
            <img src={img} className="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstProduct;
