import App from "./App";
import Generator from "./components/Generator";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "generator",
    element: <Generator />,
  },
];

export default routes;
