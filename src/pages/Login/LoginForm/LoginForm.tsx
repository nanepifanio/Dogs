import { FormEvent, useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import * as styles from "./LoginFormStyles";
import UserContext from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import H1 from "../../../components/H1";
import ShowError from "../../../components/ShowError";

const LoginForm = () => {
  const username = useForm("username");
  const password = useForm("password");
  const { userLogin, error, loading, userData, logged } =
    useContext(UserContext);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      await userLogin(username.value, password.value);
    } else {
      password.validate();
      username.validate();
    }
  };

  return (
    <>
      <div className="animeLeft">
        <styles.FormContainer>
          <H1 title="Login" />
          <form onSubmit={handleSubmit}>
            {loading && (
              <>
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
            {!loading && (
              <>
                <Input
                  id="username"
                  label="Usuário"
                  type="text"
                  {...username}
                />
                <Input
                  id="password"
                  label="Senha"
                  type="password"
                  {...password}
                />
                <Button>Entrar</Button>
              </>
            )}
            <ShowError error={error} />
          </form>
          <Link to="recuperar-senha" className="perdeu">
            Perdeu a Senha?
          </Link>
          <styles.SignInArea>
            <h2>Cadastre-se</h2>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link to="cadastrar">
              <Button>Cadastro</Button>
            </Link>
          </styles.SignInArea>
        </styles.FormContainer>
      </div>

      {logged && <Navigate to={`/user/${userData?.username}`} />}
    </>
  );
};

export default LoginForm;
