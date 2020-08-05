import Header from "../pages/header";
import Error404 from "../pages/Error404";
import Home from "../pages/home";
import Character from "../pages/character";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = Header();
  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
