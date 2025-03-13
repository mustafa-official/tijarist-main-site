import icon1 from "../assets/signin-icon.png";
import { RxArrowRight } from "react-icons/rx";

const SignInEmail = () => {
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

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-black mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-[#F3F3F3] text-sm rounded-lg border border-[#0000001A] outline-none"
                  placeholder="Enter email"
                />
              </div>

              <button
                type="submit"
                className="w-full font-semibold text-base bg-gradient-to-r from-[#BD30FF] to-[#7230FF] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors"
              >
                Next
                <RxArrowRight className="w-4 h-4" />
              </button>
            </form>
            <div className="mt-10 md:mt-14">
              <button
                type="button"
                className="w-full bg-[#F3F3F3] text-sm font-semibold text-black border border-[#0000001A] py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              >
                Continue with Google
                <svg className="w-5 h-5 mx-2" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </button>
            </div>

            <p className="text-center mt-5 text-sm text-[#555151]">
              Dont have an account?{" "}
              <a
                href="#"
                className="font-medium text-black underline"
              >
                Signup
              </a>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SignInEmail;
