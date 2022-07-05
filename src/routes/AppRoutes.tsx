import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);
  /* return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      ...
    </Routes>
  ); */
};

export default AppRoutes;
