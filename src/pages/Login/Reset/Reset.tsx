import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import Button from "../../../components/Button";
import H1 from "../../../components/H1";
import Input from "../../../components/Input";
import ShowError from "../../../components/ShowError";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

const Reset = () => {
  const [login, setLogin] = useState<string>("");
  const [key, setKey] = useState<string>("");
  const password = useForm("password");
  const { request, error, loading } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const keyParam = params.get("key");
    const loginParam = params.get("login");
    if (keyParam) setKey(keyParam);
    if (loginParam) setLogin(loginParam);
  }, []);

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = api.PASSWORD_RESET_POST({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response?.ok) navigate("/login");
    } else {
      password.validate();
    }
  };

  return (
    <>
      <H1 title="Resete a Senha" />
      <form onSubmit={handleSubmit}>
        {loading ? (
          <>
            <Input
              label="Nova Senha"
              type="password"
              id="password"
              {...password}
              disabled
            />
            <Button disabled>Resetando...</Button>
          </>
        ) : (
          <>
            <Input
              label="Nova Senha"
              type="password"
              id="password"
              {...password}
            />
            <Button>Resetar</Button>
          </>
        )}
      </form>
      <ShowError error={error} />
    </>
  );
};

export default Reset;
