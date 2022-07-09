import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Feed = () => {
  const { userData } = useContext(UserContext);

  return <div>Esse é o feed de {userData?.nome}</div>;
};

export default Feed;
