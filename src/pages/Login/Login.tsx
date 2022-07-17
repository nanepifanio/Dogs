import * as styles from "./Styles";
import LoginRoutes from "../../routes/LoginRoutes";
import Head from "../../components/Head";

const Login = () => {
  return (
    <styles.LoginContainer className="animeLeft">
      <Head title="Login" description="Página de login do site dogs." />
      <styles.Forms>
        <LoginRoutes />
      </styles.Forms>
    </styles.LoginContainer>
  );
};
export default Login;
