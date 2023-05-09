import ToDoMate from "../pages/todomate";
import MyCategory from "../pages/mycategory";

export const BASE_URL = "http://localhost:5173/";

const ROUTE_LIST = [
  { path: "/", element: ToDoMate },
  { path: "/mycategory", element: MyCategory },
];

function Router($container) {
  this.$container = $container;
  let currentPage = undefined;

  const init = () => {
    const findMatchedRoute = () =>
      ROUTE_LIST.find((route) => route.path === location.pathname);

    const route = () => {
      currentPage = null;
      const TargetPage = findMatchedRoute()?.element;
      currentPage = new TargetPage(this.$container);
    };

    route();
  };
  init();
}

export default Router;
