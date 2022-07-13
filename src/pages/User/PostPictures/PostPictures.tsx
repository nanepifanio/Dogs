import * as styles from "./PostPictureStyles";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { useForm } from "../../../hooks/useForm";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { PostImgTypes } from "../../../types/types";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ShowError from "../../../components/ShowError";
import { api } from "../../../api/api";

const PostPictures = () => {
  const [img, setImg] = useState<PostImgTypes | null>(null);
  const navigate = useNavigate();
  const { username } = useParams();
  const name = useForm("nome");
  const weight = useForm("number");
  const age = useForm("number");
  const { request, data, error, loading } = useFetch();
  const { getLocalValue } = useLocalStorage();

  useEffect(() => {
    if (data) {
      navigate(`/user/${username}`);
    }
  }, [data]);

  const handleImgChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setImg({
      preview: URL.createObjectURL((target.files as FileList)[0]),
      raw: (target.files as FileList)[0],
    });
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    if (name.validate() && weight.validate() && age.validate() && img) {
      const formData = new FormData();
      formData.append("img", (img as PostImgTypes).raw);
      formData.append("nome", name.value);
      formData.append("peso", weight.value);
      formData.append("idade", age.value);

      const { url, options } = api.PHOTO_POST(
        formData,
        getLocalValue("token") as string
      );

      await request(url, options);
    } else {
      name.validate();
      weight.validate();
      age.validate();
    }
  };

  return (
    <styles.PostPictureContainer className="animeLeft">
      <form onSubmit={handleSubmit}>
        {!loading && (
          <>
            <Input label="Nome" id="nome" type="text" {...name} />
            <Input label="Peso (Kg)" id="peso" type="number" {...weight} />
            <Input label="Idade" id="idade" type="number" {...age} />
            <input type="file" name="img" id="img" onChange={handleImgChange} />
            <Button>Enviar</Button>
          </>
        )}
        {loading && (
          <>
            <Input
              label="Nome"
              id="nome"
              type="text"
              {...name}
              disabled={loading}
            />
            <Input
              label="Peso (Kg)"
              id="peso"
              type="number"
              {...weight}
              disabled={loading}
            />
            <Input
              label="Idade"
              id="idade"
              type="number"
              {...age}
              disabled={loading}
            />
            <input
              type="file"
              name="img"
              id="img"
              onChange={handleImgChange}
              disabled={loading}
            />
            <Button disabled={loading}>Enviando...</Button>
          </>
        )}
        <ShowError error={error} />
      </form>
      <div>
        {img?.preview && (
          <styles.PicturePreview
            style={{ backgroundImage: `url(${img.preview})` }}
          ></styles.PicturePreview>
        )}
      </div>
    </styles.PostPictureContainer>
  );
};

export default PostPictures;
