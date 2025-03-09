import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";
import StartBusiness from "../pages/StartBusiness";
import SellProduct from "../pages/SellProduct";

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
    ],
  },
]);
export default router;
