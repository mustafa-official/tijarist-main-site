import start1 from "../../assets/start1.png";
import start2 from "../../assets/start2.png";
import start3 from "../../assets/start3.png";

const StartBusiness = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="my-4">
        <h2 className="font-semibold text-2xl md:text-3xl text-black text-left">
          Start your business easier than ever
        </h2>
        <p className="text-[#555151] text-base text-left mt-3">
          From building your first website and registering your domain to
          setting up a professional email address,
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12 gap-y-8 mt-10">
        <div className="bg-[#EDFAFA] flex justify-center items-center h-64 md:h-80 rounded-3xl">
          <img src={start1} className="px-8 sm:px-12 py-10 md:py-0" alt="" />
        </div>
        <div>
          <h2 className="text-2xl md:text-[28px] font-semibold text-black">
            Get Your Own Website
          </h2>
          <p className="text-[#555151] text-sm md:text-[16px] mt-5 md:mt-7 leading-5 sm:leading-6">
            From building your first website and registering your domain to
            setting up a professional email address, launching an eCommerce
            store or migrating an existing website – your online success story
            starts here.Web hosting provides everything you need to get your
            idea online. From where your website lives in the digital world, to
            where your files and data are securely stored – find and manage it
            all in one place. Optimized for speed, security and reliability,
            we’re trusted by over 3 million website owners worldwide.
          </p>
        </div>
        <div>
          <h2 className="text-2xl md:text-[28px] font-semibold text-black">
            Everything in one place
          </h2>
          <p className="text-[#555151] text-sm md:text-[16px] mt-5 md:mt-7 leading-5 sm:leading-6">
            From building your first website and registering your domain to
            setting up a professional email address, launching an eCommerce
            store or migrating an existing website – your online success story
            starts here.Web hosting provides everything you need to get your
            idea online. From where your website lives in the digital world, to
            where your files and data are securely stored – find and manage it
            all in one place. Optimized for speed, security and reliability,
            we’re trusted by over 3 million website owners worldwide.
          </p>
        </div>
        <div className="bg-[#FFF4EA] flex justify-center items-center h-64 md:h-80 rounded-3xl">
          <img src={start2} className="px-8 sm:px-12 py-10" alt="" />
        </div>
      </div>
    </div>
  );
};

export default StartBusiness;
