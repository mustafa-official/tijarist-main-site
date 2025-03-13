import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Root = () => {
  return (
    <div>
      {/* className="bg-gradient-to-r from-[#FEF7DD] to-[#E0FAEE]" */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
