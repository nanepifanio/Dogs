import * as styles from "./FeedPhotosItemStyles";
import { APIPhotoGet } from "../../../../types/types";

type PhotosItemProps = {
  photo: APIPhotoGet;
  click: (param: APIPhotoGet) => void;
};

const FeedPhotosItem = ({ photo, click }: PhotosItemProps) => {
  return (
    <styles.PhotosItemLi onClick={() => click(photo)}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </styles.PhotosItemLi>
  );
};

export default FeedPhotosItem;
