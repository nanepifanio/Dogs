import { useContext } from "react";
import UserContext from "../../context/UserContext";

const User = () => {
  const { userData } = useContext(UserContext);

  return <div>Essa é a página de {userData?.nome}</div>;
};

export default User;
