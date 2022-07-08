import * as styles from "./HeaderStyles";
import brand from "../../assets/dogs.svg";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Header = () => {
  const { userData, userLogout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout();
    navigate("/");
  };

  return (
    <styles.HeaderContainer>
      <styles.HeaderNav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <img src={brand} alt="Brand" />
        </Link>
        {!userData && (
          <Link to="login" className="login">
            Login / Criar
          </Link>
        )}
        {userData && (
          <>
            <Link to={"/user/" + userData.nome} className="login">
              {userData.nome}
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </styles.HeaderNav>
    </styles.HeaderContainer>
  );
};

export default Header;
