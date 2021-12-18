import About from "../pages/about";
import ColorDetail from "../pages/colorDetail";
import Explore from "../pages/explore";
import Home from "../pages/home";
import NotFoundPage from "../pages/notFound";
import Temp from "../pages/Templates";

const routes = [
  { path: "/palette/:id([0-9]+)?", component: ColorDetail },
  { path: "/explore", component: Explore },
  { path: "/color", component: ColorDetail },
  { path: "/temp", component: Temp },
  { path: "/about", component: About },
  { path: "/", component: Home, exact: true },
  { component: NotFoundPage },
];

export default routes
