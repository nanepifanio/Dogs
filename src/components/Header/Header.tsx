import * as styles from "./HeaderStyles";
import brand from "../../assets/dogs.svg";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

const Header = () => {
  const { userData, logged } = useContext(UserContext);

  return (
    <styles.HeaderContainer>
      <styles.HeaderNav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <img src={brand} alt="Brand" />
        </Link>
        {!logged && (
          <Link to="/login/" className="login">
            Login / Criar
          </Link>
        )}
        {logged && (
          <>
            <Link to={"/user/" + userData?.nome} className="login">
              {userData?.nome}
            </Link>
          </>
        )}
      </styles.HeaderNav>
    </styles.HeaderContainer>
  );
};

export default Header;
