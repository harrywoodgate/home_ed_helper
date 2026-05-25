import App from "./App";
import Generator from "./components/Generator";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "Signup",
    element: <Signup />
  },
  {
    path: "generator",
    element: (
      <ProtectedRoute>
        <Generator />
      </ProtectedRoute>
    ),
  },
];

export default routes;
