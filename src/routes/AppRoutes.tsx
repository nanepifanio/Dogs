import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import ProtectedRoute from "../Auth/ProtectedRoute";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login/*", element: <Login /> },
    {
      path: "/user/:username/*",
      element: (
        <ProtectedRoute>
          <User />
        </ProtectedRoute>
      ),
    },
  ]);
};

export default AppRoutes;
