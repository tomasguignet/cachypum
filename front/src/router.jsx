import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Fundation from "./pages/Fundation/Fundation";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
import Philosophy from "./pages/Philosophy/Philosophy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fundation",
    element: <Fundation />,
  },
  {
    path: "/moreinfo",
    element: <MoreInfo />,
  },
  {
    path: "/philosophy",
    element: <Philosophy />,
  },
]);

export default router;
