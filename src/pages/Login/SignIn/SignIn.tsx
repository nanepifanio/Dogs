import * as styles from "../LoginForm/LoginFormStyles";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { useForm } from "../../../hooks/useForm";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ShowError from "../../../components/ShowError";
import { api } from "../../../api/api";

const SignIn = () => {
  const username = useForm("username");
  const password = useForm("password");
  const email = useForm("email");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { userLogin, userData } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (username.validate() && password.validate() && email.validate()) {
      const { url, options } = api.USER_POST({
        username: username.value,
        password: password.value,
        email: email.value,
      });
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url, options);
        if (response.ok) {
          await userLogin(username.value, password.value);
          if (userData?.nome) {
            navigate("/user/" + userData.nome);
          }
        } else {
          throw new Error("Já existe um cadastro com esse email!");
        }
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    } else {
      password.validate();
      username.validate();
      email.validate();
    }
  };

  return (
    <div className="animeLeft">
      <styles.FormH1>Cadastro</styles.FormH1>
      <form onSubmit={handleSubmit}>
        <Input id="email" label="Email" type="email" {...email} />
        <Input id="username" label="Usuário" type="text" {...username} />
        <Input id="password" label="Senha" type="password" {...password} />
        {!loading && <Button disabled={loading}>Cadastrar</Button>}
        {loading && <Button disabled={loading}>Validando...</Button>}
        <ShowError error={error} />
      </form>
    </div>
  );
};

export default SignIn;
