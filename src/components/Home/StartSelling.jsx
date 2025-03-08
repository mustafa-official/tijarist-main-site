const StartSelling = () => {
  return (
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
  );
};

export default StartSelling;
