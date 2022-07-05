import { useRoutes } from "react-router-dom";
import Recover from "../pages/Login/Recover";
import SignIn from "../pages/Login/SignIn";

const LoginRoutes = () => {
  return useRoutes([
    { path: "recuperar-senha", element: <Recover /> },
    { path: "cadastrar", element: <SignIn /> },
  ]);
};

export default LoginRoutes;
