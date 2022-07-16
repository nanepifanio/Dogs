import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import ShowError from "../ShowError";
import PhotoContent from "./PhotoContent";
import { APIPhotoGet } from "../../types/types";

const Photo = () => {
  const { id } = useParams();
  const { request, data, error, loading } = useFetch();

  useEffect(() => {
    const { url, options } = api.PHOTO_GET(Number(id));
    const fetchPhoto = async () => {
      await request(url, options);
    };
    fetchPhoto();
  }, [request, id]);

  return (
    <div>
      {error && <ShowError error={error} />}
      {loading && <Loading />}
      {data && (
        <section className="container mainContainer">
          <PhotoContent data={data as APIPhotoGet} single />
        </section>
      )}
    </div>
  );
};

export default Photo;
