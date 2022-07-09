import * as styles from "../LoginForm/LoginFormStyles";
import { FormEvent, useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";
import { useFetch } from "../../../hooks/useFetch";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import H1 from "../../../components/H1";
import ShowError from "../../../components/ShowError";
import { api } from "../../../api/api";

const SignIn = () => {
  const username = useForm("username");
  const password = useForm("password");
  const email = useForm("email");
  const { loading, error, request } = useFetch();
  const { userLogin, logged, userData } = useContext(UserContext);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (username.validate() && password.validate() && email.validate()) {
      const { url, options } = api.USER_POST({
        username: username.value,
        password: password.value,
        email: email.value,
      });
      const { response } = await request(
        url,
        options,
        "Já existe um cadastro com esse email!"
      );
      if (response?.ok) await userLogin(username.value, password.value);
    } else {
      password.validate();
      username.validate();
      email.validate();
    }
  };

  return (
    <>
      <div className="animeLeft">
        <H1 title="Cadastrar" />
        <form onSubmit={handleSubmit}>
          {!loading && (
            <>
              <Input id="email" label="Email" type="email" {...email} />
              <Input id="username" label="Usuário" type="text" {...username} />
              <Input
                id="password"
                label="Senha"
                type="password"
                {...password}
              />
              <Button>Cadastrar</Button>
            </>
          )}
          {loading && (
            <>
              <Input
                id="email"
                label="Email"
                type="email"
                disabled={loading}
                {...email}
              />
              <Input
                id="username"
                label="Usuário"
                type="text"
                disabled={loading}
                {...username}
              />
              <Input
                id="password"
                label="Senha"
                type="password"
                disabled={loading}
                {...password}
              />
              <Button disabled={loading}>Validando...</Button>
            </>
          )}
          <ShowError error={error} />
        </form>
      </div>

      {logged && <Navigate to={`/user/${userData?.username}`} />}
    </>
  );
};

export default SignIn;
