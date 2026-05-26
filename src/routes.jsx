import App from "./App";
import Generator from "./components/Generator";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

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
    path: "signup",
    element: <Signup />
  },
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
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
