import { FormEvent, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as styles from "./LoginFormStyles";
import UserContext from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ShowError from "../../../components/ShowError";

const LoginForm = () => {
  const username = useForm("username");
  const password = useForm("password");
  const { userLogin, error, loading, userData, logged } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      await userLogin(password.value, username.value);
      if (userData?.nome) {
        navigate("/user/" + userData.nome);
      }
    } else {
      password.validate();
      username.validate();
    }
  };

  return (
    <>
      <div className="animeLeft">
        <styles.FormContainer>
          <styles.FormH1>Login</styles.FormH1>
          <form onSubmit={handleSubmit}>
            <Input id="username" label="Usuário" type="text" {...username} />
            <Input id="password" label="Senha" type="password" {...password} />
            {!loading && <Button disabled={loading}>Entrar</Button>}
            {loading && <Button disabled={loading}>Validando...</Button>}
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

      {logged && <Navigate to={"/user/" + userData?.nome} />}
    </>
  );
};

export default LoginForm;
