import img1 from "../assets/about1.png";
import img2 from "../assets/about2.png";

const AboutUs = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="mb-4 lg:text-left text-center">
        <h2 className="inline-block px-4 py-2 rounded-full border border-black text-black text-base font-semibold">
          About us
        </h2>
        <p className="mt-3 text-[#555151] font-medium text-base">
          Contact us for further inquiry or any collaboration
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 gap-x-6 mt-10">
        <div>
          <h2 className="text-black font-medium text-4xl md:text-5xl">
            Welcome to Tijarist
          </h2>
          <p className="text-[#555151] font-medium text-2xl lg:text-3xl my-4">
            Your Partner in Digital Commerce!
          </p>
          <p className="text-[#555151] text-base md:text-[18px] leading-7">
            At Tijarist, we empower businesses to thrive in the ever-evolving
            world of e-commerce. Our platform is designed to simplify online
            selling, enabling entrepreneurs, small businesses, and large
            enterprises to create stunning online stores and manage them
            effortlessly.
          </p>
        </div>
        <div>
          <img src={img1} className="w-full" alt="" />
        </div>
        <div>
          <img src={img2} className="w-full" alt="" />
        </div>
        <div>
          <h2 className="text-black font-medium text-xl md:text-3xl">
            Our Mission
          </h2>
          <p className="text-[#555151] text-base md:text-[18px] leading-7 mt-4">
            Our mission is to make digital commerce accessible to everyone. We
            believe that anyone with a vision and passion should have the tools
            to turn their dreams into reality. That’s why we’ve built Tijarist –
            a comprehensive, user-friendly, and scalable platform that adapts to
            your unique business needs
          </p>
        </div>
      </div>
      <div className="mt-14 md:mt-16 lg:mt-20">
        <div className="flex items-center flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[32%]">
            <h2 className="text-black font-medium text-xl md:text-3xl">
              Why Choose Tijarist?
            </h2>
            <p className="text-[#555151] leading-7 mt-4 md:mt-7">
              At Tijarist, we understand the challenges and opportunities of
              building a successful online business. Here’s why thousands of
              businesses trust us to bring their ideas to life.Founded by a team
              of tech enthusiasts and business experts, Tijarist was born out of
              a passion for helping businesses grow. We’ve combined years of
              experience and a shared vision.
            </p>
          </div>
          <div className="w-full lg:w-[68%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-[#EDE4FF] border border-[#00000040] rounded-xl px-6 py-12 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-base lg:text-xl text-black font-bold mb-3">
                  Innovation at Your Fingertips:
                </h3>
                <p className="text-[#555151] text-sm ">
                  We’re dedicated to providing cutting-edge tools and features
                  to keep your business ahead of the curve.
                </p>
              </div>
              <div className="bg-[#FFEBD9] border border-[#00000040] rounded-xl px-6 py-12 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-base lg:text-xl text-black font-bold mb-3">
                  Ease of Use:
                </h3>
                <p className="text-[#555151] text-sm ">
                  We’re dedicated to providing cutting-edge tools and features
                  to keep your business ahead of the curve.
                </p>
              </div>
              <div className="bg-[#DCEAFF] border border-[#00000040] rounded-xl px-6 py-12 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-base lg:text-xl text-black font-bold mb-3">
                  Global Reach:
                </h3>
                <p className="text-[#555151] text-sm ">
                  We’re dedicated to providing cutting-edge tools and features
                  to keep your business ahead of the curve.
                </p>
              </div>
              <div className="bg-[#DCFFDD] border border-[#00000040] rounded-xl px-6 py-12 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-base lg:text-xl text-black font-bold mb-3">
                  Reliable Support:
                </h3>
                <p className="text-[#555151] text-sm ">
                  We’re dedicated to providing cutting-edge tools and features
                  to keep your business ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
