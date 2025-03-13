import icon1 from "../assets/signin-icon.png";

const SignUp = () => {
  return (
    <div className="my-8 md:my-12 lg:my-16 max-w-5xl mx-auto px-4">
      <div className="flex items-center">
        <div className="w-full md:w-[50%] flex flex-col justify-center">
          <div>
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="w-12 h-12 flex justify-center items-center bg-gradient-to-r from-[#BD30FF] to-[#7230FF] rounded-lg">
                <img src={icon1} alt="" />
              </div>
              <h1 className="text-2xl mt-2 md:text-3xl text-black font-semibold">
                Welcome to Tijarist
              </h1>
              <p className="text-[#555151] font-medium text-xl mt-3 mb-8">
                Lets sign you in
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-black mb-2"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-[#F3F3F3] text-sm rounded-lg border border-[#0000001A] outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-black mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#F3F3F3] text-sm rounded-lg border border-[#0000001A] outline-none"
                  placeholder="Johndoe987@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-black mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 bg-[#F3F3F3] text-sm rounded-lg border border-[#0000001A] outline-none"
                  placeholder="********"
                />
              </div>

              <button
                type="submit"
                className="w-full font-semibold text-base bg-gradient-to-r from-[#BD30FF] to-[#7230FF] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
              >
                Sign up
              </button>
            </form>

            <p className="text-center mt-5 text-sm text-[#555151]">
              Forgot Password?{" "}
              <a href="#" className="font-medium text-black underline">
                Reset
              </a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignUp;
