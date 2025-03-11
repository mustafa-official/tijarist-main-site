import img1 from "../assets/freetrial1.png";
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
          <p className="text-[#555151] text-sm md:text-sm mt-3">By entering your email, you agree to receive marketing emails from Tijarist</p>
        </div>
        <div className="w-full flex justify-center lg:justify-end lg:w-[50%]">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
