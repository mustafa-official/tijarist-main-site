import startup1 from "../../assets/startup1.png";
import startup2 from "../../assets/startup2.png";
import startup3 from "../../assets/startup3.png";
const TijaristRight = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-center">
          Is Tijarist right for me?
        </h2>
        <p className="text-[#555151] text-base text-center mt-3">
          Here are three powerful questions that helps you determine if Tijarist
          is the right solution for them
        </p>
      </div>
      <div className="grid md:grid-cols-3 items-stretch gap-5 mt-8 md:mt-10">
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(142,84,233,1) 17%, rgba(0,0,0,1) 87%)",
          }}
          className="rounded-xl py-12 md:py-16 lg:py-20 px-8 flex flex-col justify-center items-center gap-5 h-full"
        >
          <div className="bg-white w-28 h-28 rounded-full flex justify-center items-center">
            <img src={startup1} className="p-5" alt="" />
          </div>
          <p className="text-xl text-white text-center">
            Can I launch my online store quickly, even if I’m not tech-savvy?
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(142,84,233,1) 17%, rgba(0,0,0,1) 87%)",
          }}
          className="rounded-xl py-12 md:py-16 lg:py-20 px-8 flex flex-col justify-center items-center gap-5 h-full"
        >
          <div className="bg-white w-28 h-28 rounded-full flex justify-center items-center">
            <img src={startup2} className="p-5" alt="" />
          </div>
          <p className="text-xl text-white text-center">
            Can I sell on multiple platforms and manage everything from one
            place?
          </p>
        </div>
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(142,84,233,1) 17%, rgba(0,0,0,1) 87%)",
          }}
          className="rounded-xl py-12 md:py-16 lg:py-20 px-8 flex flex-col justify-center items-center gap-5 h-full"
        >
          <div className="bg-white w-28 h-28 rounded-full flex justify-center items-center">
            <img src={startup3} className="p-5" alt="" />
          </div>
          <p className="text-xl text-white text-center">
            Can I attract more customers and keep them coming back?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TijaristRight;
