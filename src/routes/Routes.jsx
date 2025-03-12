import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import StartBusiness from "../pages/StartBusiness";
import SellProduct from "../pages/SellProduct";
import MarketProduct from "../pages/MarketProduct";
import ManageBusiness from "../pages/ManageBusiness";
import Contact from "../pages/Contact";
import Theme from "../pages/Theme";
import AboutUs from "../pages/AboutUs";
import Faq from "../pages/Faq";
import TermsCondition from "../pages/TermsCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import RefundPolicy from "../pages/RefundPolicy";
import Testimonial from "../pages/Testimonial";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import FreeTrial from "../pages/FreeTrial";
import Themes from "../pages/Themes";
import ThemeDetails from "../pages/ThemeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/start-business",
        element: <StartBusiness />,
      },
      {
        path: "/sell-product",
        element: <SellProduct />,
      },
      {
        path: "/market-product",
        element: <MarketProduct />,
      },
      {
        path: "/manage-business",
        element: <ManageBusiness />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/theme",
        element: <Theme />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/terms-condition",
        element: <TermsCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },
      {
        path: "/testimonial",
        element: <Testimonial />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/free-trial",
        element: <FreeTrial />,
      },
      {
        path: "/themes",
        element: <Themes />,
      },
      {
        path: "/theme-details",
        element: <ThemeDetails />,
      },
    ],
  },
]);
export default router;
