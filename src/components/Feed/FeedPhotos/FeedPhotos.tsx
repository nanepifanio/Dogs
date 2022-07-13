import * as styles from "./FeedPhotosStyles";
import { useEffect } from "react";
import { api } from "../../../api/api";
import { useFetch } from "../../../hooks/useFetch";
import { APIPhotoGet } from "../../../types/types";
import Loading from "../../Loading";
import ShowError from "../../ShowError";
import FeedPhotosItem from "./FeedPhotosItem";

type FeedPhotosProps = {
  changePhoto: (param: APIPhotoGet) => void;
};

const FeedPhotos = ({ changePhoto }: FeedPhotosProps) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = api.PHOTOS_GET({ page: 1, total: 6, user: 0 });
      await request(url, options);
    };
    fetchPhotos();
  }, [request]);

  return (
    <div>
      {error && <ShowError error={error} />}
      {loading && <Loading />}
      {data && (
        <styles.FeedPhotosUl className="animeLeft">
          {(data as APIPhotoGet[]).map((photo) => (
            <FeedPhotosItem key={photo.id} photo={photo} click={changePhoto} />
          ))}
        </styles.FeedPhotosUl>
      )}
    </div>
  );
};

export default FeedPhotos;
