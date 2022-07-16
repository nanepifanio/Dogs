import { useRoutes } from "react-router-dom";
import LoginForm from "../pages/Login/LoginForm";
import Recover from "../pages/Login/Recover";
import Reset from "../pages/Login/Reset";
import SignIn from "../pages/Login/SignIn";
import NotFound from "../pages/NotFound";

const LoginRoutes = () => {
  return useRoutes([
    { path: "", element: <LoginForm /> },
    { path: "/recuperar-senha", element: <Recover /> },
    { path: "/cadastrar", element: <SignIn /> },
    { path: "/resetar", element: <Reset /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default LoginRoutes;
