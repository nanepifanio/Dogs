import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import User from "../pages/User";
import ProtectedRoute from "../Auth/ProtectedRoute";
import Photo from "../components/Photo";
import UserProfile from "../pages/User/UserProfile";
import NotFound from "../pages/NotFound";

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
    { path: "/photo/:id", element: <Photo /> },
    { path: "/profile/:author", element: <UserProfile /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default AppRoutes;
