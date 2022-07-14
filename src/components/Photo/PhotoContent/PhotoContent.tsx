import * as styles from "./PhotoContentStyles";
import { Link } from "react-router-dom";
import { APIPhotoGet } from "../../../types/types";
import H1 from "../../H1";
import PhotoComments from "./PhotoComments";
import { useContext } from "react";
import UserContext from "../../../context/UserContext";
import PhotoDelete from "../PhotoDelete";
import ImageLoader from "../../ImageLoader";

type PhotoContentProps = {
  data: APIPhotoGet;
};

const PhotoContent = ({ data: { photo, comments } }: PhotoContentProps) => {
  const { userData } = useContext(UserContext);

  return (
    <styles.PhotoContentContainer>
      <styles.ContentImgArea>
        <ImageLoader src={photo.src} alt={photo.title} />
      </styles.ContentImgArea>
      <styles.ContentDetailsArea>
        <div>
          <styles.ContentAuthor>
            {userData && userData.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}
            <styles.ContentSpan>{photo.acessos}</styles.ContentSpan>
          </styles.ContentAuthor>
          <H1>
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </H1>
          <styles.ContentAttributeAreas>
            <li>{photo.peso} kg</li>
            <li>
              {photo.idade} {+photo.idade > 1 ? "anos" : "ano"}
            </li>
          </styles.ContentAttributeAreas>
        </div>
      </styles.ContentDetailsArea>
      <PhotoComments id={photo.id} comments={comments} />
    </styles.PhotoContentContainer>
  );
};

export default PhotoContent;
