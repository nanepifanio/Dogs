import { FormEvent, useContext, useEffect } from "react";
// Styles
import * as styles from "./Styles";
// Pictures
import logindogimg from "../../assets/login.jpg";
// CustomHooks
import { useForm } from "../../hooks/useForm";
// Routes
import LoginRoutes from "../../routes/LoginRoutes";
// Components
import Input from "../../components/Input";
import Button from "../../components/Button";
// Contexts
import UserContext from "../../context/UserContext";

const Login = () => {
  const username = useForm("username");
  const password = useForm("password");
  const { userLogin } = useContext(UserContext);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(password.value, username.value);
    } else {
      username.validate();
      password.validate();
    }
  };

  return (
    <styles.Container>
      <img src={logindogimg} alt="Login Dog" />
      <div>
        <styles.FormH1>Login</styles.FormH1>
        <styles.FormArea onSubmit={handleSubmit}>
          <Input id="username" label="Usuário" type="text" {...username} />
          <Input id="password" label="Senha" type="password" {...password} />
          <Button>Entrar</Button>
        </styles.FormArea>
      </div>
      <LoginRoutes />
    </styles.Container>
  );
};

export default Login;
