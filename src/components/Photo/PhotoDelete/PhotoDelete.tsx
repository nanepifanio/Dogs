import * as styles from "./PhotoDeleteStyles";
import { useFetch } from "../../../hooks/useFetch";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { api } from "../../../api/api";

type PhotoDeleteProps = {
  id: number;
};

const PhotoDelete = ({ id }: PhotoDeleteProps) => {
  const { request, loading } = useFetch();
  const { getLocalValue } = useLocalStorage();

  const handleDelete = async (): Promise<void> => {
    const confirm: boolean = window.confirm("Deseja mesmo deletar a foto?");
    if (confirm) {
      const { url, options } = api.PHOTO_DELETE(
        id,
        getLocalValue("token") as string
      );
      const { response } = await request(url, options);
      if (response?.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <styles.DeleteButton disabled>Deletando...</styles.DeleteButton>
      ) : (
        <styles.DeleteButton onClick={handleDelete}>
          Deletar
        </styles.DeleteButton>
      )}
    </>
  );
};

export default PhotoDelete;
