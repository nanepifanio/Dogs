import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

type UserAuthProps = {
  children: ReactNode;
};

const UserAuth = ({ children }: UserAuthProps) => {
  const { logged } = useContext(UserContext);

  if (logged) {
    return <div>{children}</div>;
  } else {
    return <Navigate to="/login/" />;
  }
};

export default UserAuth;
