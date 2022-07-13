import * as styles from "./FeedModalStyles";
import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { api } from "../../../api/api";
import { APIPhotoGet } from "../../../types/types";
import ShowError from "../../ShowError";
import Loading from "../../Loading";
import PhotoContent from "../../Photo/PhotoContent";

type FeedModalProps = {
  photo: APIPhotoGet;
};

const FeedModal = ({ photo }: FeedModalProps) => {
  const { request, data, error, loading } = useFetch();

  useEffect(() => {
    const fetchPhoto = async () => {
      const { url, options } = api.PHOTO_GET(photo.id);
      await request(url, options);
    };
    fetchPhoto();
  }, [photo, request]);

  return (
    <styles.Modal>
      {error && <ShowError error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </styles.Modal>
  );
};

export default FeedModal;
