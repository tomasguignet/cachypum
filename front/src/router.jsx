import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Fundation from "./pages/Fundation/Fundation";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
import Philosophy from "./pages/Philosophy/Philosophy";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

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
  {
    path: "/projects/:id",
    element: <ProjectDetail />,
  },
]);

export default router;
