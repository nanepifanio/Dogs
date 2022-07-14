import * as styles from "./FeedPhotosItemStyles";
import { APIPhotosGet } from "../../../../types/types";
import ImageLoader from "../../../ImageLoader";

type PhotosItemProps = {
  photo: APIPhotosGet;
  click: (param: APIPhotosGet) => void;
};

const FeedPhotosItem = ({ photo, click }: PhotosItemProps) => {
  return (
    <styles.PhotosItemLi onClick={() => click(photo)}>
      <ImageLoader src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </styles.PhotosItemLi>
  );
};

export default FeedPhotosItem;
