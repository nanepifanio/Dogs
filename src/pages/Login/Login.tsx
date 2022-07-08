import * as styles from "./Styles";
import LoginRoutes from "../../routes/LoginRoutes";

const Login = () => {
  return (
    <styles.LoginContainer className="animeLeft">
      <styles.Forms>
        <LoginRoutes />
      </styles.Forms>
    </styles.LoginContainer>
  );
};
export default Login;
