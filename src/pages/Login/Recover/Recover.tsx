import { FormEvent } from "react";
import { api } from "../../../api/api";
import Button from "../../../components/Button";
import H1 from "../../../components/H1";
import Input from "../../../components/Input";
import ShowError from "../../../components/ShowError";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";

const Recover = () => {
  const login = useForm("");
  const { request, data, loading, error } = useFetch();

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = api.PASSWORD_LOST_POST({
        login: login.value,
        url: window.location.href.replace("recuperar-senha", "resetar"),
      });
      await request(url, options);
    } else {
      login.validate();
    }
  };

  return (
    <section>
      <H1 title="Perdeu a Senha?" />
      {data && <p style={{ color: "#0f0" }}>{data}</p>}
      {!data && (
        <>
          <form onSubmit={handleSubmit}>
            {loading ? (
              <>
                <Input
                  label="Email / Usuário"
                  type="text"
                  id="email"
                  {...login}
                  disabled
                />
                <Button disabled>Enviando...</Button>
              </>
            ) : (
              <>
                <Input
                  label="Email / Usuário"
                  type="text"
                  id="email"
                  {...login}
                />
                <Button>Enviar</Button>
              </>
            )}
          </form>
          <ShowError error={error} />
        </>
      )}
    </section>
  );
};

export default Recover;
