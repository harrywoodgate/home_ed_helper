import App from "./App";
import Generator from "./components/dashboard/generator/Generator";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import History from "./components/dashboard/history/History";

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
    children: [
      {path: "generator", element: <Generator />},
      {path: "history", element: <History />},
    ]
  },
];

export default routes;
