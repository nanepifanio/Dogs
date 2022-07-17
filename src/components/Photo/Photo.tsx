import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../Loading";
import ShowError from "../ShowError";
import PhotoContent from "./PhotoContent";
import { APIPhotoGet } from "../../types/types";
import Head from "../Head";

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
          <Head
            title={(data as APIPhotoGet).photo.title}
            description={`Página da foto ${(data as APIPhotoGet).photo.title}`}
          />
          <PhotoContent data={data as APIPhotoGet} single />
        </section>
      )}
    </div>
  );
};

export default Photo;
