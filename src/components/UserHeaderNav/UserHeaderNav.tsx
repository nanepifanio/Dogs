import * as styles from "./UserHeaderNavStyle";
import feedicon from "../../assets/feed.svg";
import * as icons from "../../assets/SVGComponents/SVGComponents";
import { useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";

const UserHeaderNav = () => {
  const [mobile, setMobile] = useState<boolean>(false);
  const { userLogout } = useContext(UserContext);
  const { username } = useParams();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    userLogout();
    navigate("/");
  };

  return (
    <styles.HeaderNav>
      <NavLink to={"/user/" + username} end>
        <icons.Feed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to={"/user/" + username + "/estatisticas"}>
        <icons.Stats />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to={"/user/" + username + "/postar"}>
        <icons.Add />
        {mobile && "Adicionar Fotos"}
      </NavLink>
      <button onClick={handleLogout}>
        <icons.Exit />
        {mobile && "Sair"}
      </button>
    </styles.HeaderNav>
  );
};

export default UserHeaderNav;
