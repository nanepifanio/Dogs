import { useRoutes } from "react-router-dom";
import LoginForm from "../pages/Login/LoginForm";
import Recover from "../pages/Login/Recover";
import SignIn from "../pages/Login/SignIn";

const LoginRoutes = () => {
  return useRoutes([
    { path: "/", element: <LoginForm /> },
    { path: "recuperar-senha", element: <Recover /> },
    { path: "cadastrar", element: <SignIn /> },
  ]);
};

export default LoginRoutes;
