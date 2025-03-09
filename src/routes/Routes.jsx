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
    ],
  },
]);
export default router;
