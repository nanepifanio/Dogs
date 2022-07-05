import * as styles from "./Styles";
import { FormEvent } from "react";
import { useForm } from "../../hooks/useForm";
import { useSubmit } from "../../hooks/useSubmit";
import { APIRequests } from "../../types/types";
import logindogimg from "../../assets/login.jpg";
import LoginRoutes from "../../routes/LoginRoutes";
import Input from "../../components/Input";
import Button from "../../components/Button";

const TOKEN_POST: APIRequests = {
  endpoint: "/jwt-auth/v1/token",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    username: "",
    password: "",
  },
};

const Login = () => {
  const username = useForm("username");
  const password = useForm("password");
  const { error, submit } = useSubmit([username, password], TOKEN_POST);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await submit();
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
