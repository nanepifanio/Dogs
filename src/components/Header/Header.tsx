import * as styles from "./HeaderStyles";
import brand from "../../assets/dogs.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <styles.HeaderContainer>
      <styles.HeaderNav className="container">
        <Link to="/" aria-label="Dogs - Home">
          <img src={brand} alt="Brand" />
        </Link>
        <Link to="login" className="login">
          Login / Criar
        </Link>
      </styles.HeaderNav>
    </styles.HeaderContainer>
  );
};

export default Header;
