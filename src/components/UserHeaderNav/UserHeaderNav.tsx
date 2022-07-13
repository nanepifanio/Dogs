import * as styles from "./UserHeaderNavStyle";
import * as icons from "../../assets/SVGComponents/SVGComponents";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import UserContext from "../../context/UserContext";
import useMedia from "../../hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);
  const { username } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const mobile = useMedia("40rem");

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const handleLogout = (): void => {
    userLogout();
    navigate("/");
  };

  return (
    <>
      {mobile && (
        <styles.MobileButton
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          mobileActive={mobileMenu}
        ></styles.MobileButton>
      )}

      <styles.HeaderNav mobileActive={mobileMenu} mobile={mobile}>
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
    </>
  );
};

export default UserHeaderNav;
