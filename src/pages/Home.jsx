import Banner from "../components/Home/Banner";
import Blog from "../components/Home/Blog";
import Business from "../components/Home/Business";
import CustomerReview from "../components/Home/CustomerReview";
import Faq from "../components/Home/Faq";
import FirstProduct from "../components/Home/FirstProduct";
import PlanPrice from "../components/Home/PlanPrice";
import Platform from "../components/Home/Platform";
import StartBusiness from "../components/Home/StartBusiness";
import StartSelling from "../components/Home/StartSelling";
import TijaristRight from "../components/Home/TijaristRight";

const Home = () => {
  return (
    <section>
      <Banner />
      <Platform />
      <Business />
      <FirstProduct />
      <TijaristRight />
      <PlanPrice />
      <StartBusiness />
      <CustomerReview />
      <Faq />
      <Blog />
      <StartSelling />
    </section>
  );
};

export default Home;
