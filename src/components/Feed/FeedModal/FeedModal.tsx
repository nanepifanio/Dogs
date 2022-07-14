import * as styles from "./FeedModalStyles";
import { MouseEvent, useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { api } from "../../../api/api";
import { APIPhotoGet, APIPhotosGet } from "../../../types/types";
import ShowError from "../../ShowError";
import Loading from "../../Loading";
import PhotoContent from "../../Photo/PhotoContent";

type FeedModalProps = {
  photo: APIPhotosGet;
  setModalPhoto: (param: null) => void;
};

const FeedModal = ({ photo, setModalPhoto }: FeedModalProps) => {
  const { request, data, error, loading } = useFetch();

  useEffect(() => {
    const fetchPhoto = async () => {
      const { url, options } = api.PHOTO_GET(photo.id);
      await request(url, options);
    };
    fetchPhoto();
  }, [photo, request]);

  const handleOutsideClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };

  return (
    <styles.Modal onClick={handleOutsideClick}>
      {error && <ShowError error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data as APIPhotoGet} />}
    </styles.Modal>
  );
};

export default FeedModal;
