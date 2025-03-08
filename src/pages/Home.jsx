import Banner from "../components/Home/Banner";
import Business from "../components/Home/Business";
import FirstProduct from "../components/Home/FirstProduct";
import PlanPrice from "../components/Home/PlanPrice";
import Platform from "../components/Home/Platform";
import StartBusiness from "../components/Home/StartBusiness";
import TijaristRight from "../components/Home/TijaristRight";

const Home = () => {
  return (
    <div>
      <Banner />
      <Platform />
      <Business />
      <FirstProduct />
      <TijaristRight />
      <PlanPrice />
      <StartBusiness />
    </div>
  );
};

export default Home;
