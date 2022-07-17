import * as styles from "./FeedPhotosStyles";
import { useEffect } from "react";
import { api } from "../../../api/api";
import { useFetch } from "../../../hooks/useFetch";
import { APIPhotosGet } from "../../../types/types";
import Loading from "../../Loading";
import ShowError from "../../ShowError";
import FeedPhotosItem from "./FeedPhotosItem";

type FeedPhotosProps = {
  changePhoto: (param: APIPhotosGet) => void;
  user: number | string | undefined;
  page: number;
  setInfinite: (param: boolean) => void;
};

const FeedPhotos = ({
  changePhoto,
  user,
  page,
  setInfinite,
}: FeedPhotosProps) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const total = 6;
      const { url, options } = api.PHOTOS_GET({
        page,
        total,
        user: user as number,
      });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    };
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  return (
    <div>
      {error && <ShowError error={error} />}
      {loading && <Loading />}
      {data && !!(data as APIPhotosGet[]).length && (
        <styles.FeedPhotosUl className="animeLeft">
          {(data as APIPhotosGet[]).map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} click={changePhoto} />
          ))}
        </styles.FeedPhotosUl>
      )}
      {data && !(data as APIPhotosGet[]).length && !loading && (
        <p className="empty">Nenhuma foto para exibir.</p>
      )}
    </div>
  );
};

export default FeedPhotos;
