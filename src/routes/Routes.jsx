import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Root from "../layout/Root";
import Home from "../pages/Home";

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
  
    ],
  },
  
]);
export default router;
