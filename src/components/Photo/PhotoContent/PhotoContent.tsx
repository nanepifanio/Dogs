import * as styles from "./PhotoContentStyles";
import { Link } from "react-router-dom";
import { APIPhotoGet } from "../../../types/types";
import H1 from "../../H1";
import PhotoComments from "./PhotoComments";
import { useContext, useLayoutEffect, useRef } from "react";
import UserContext from "../../../context/UserContext";
import PhotoDelete from "../PhotoDelete";
import ImageLoader from "../../ImageLoader";
import useMedia from "../../../hooks/useMedia";

type PhotoContentProps = {
  data: APIPhotoGet;
  single?: boolean;
};

const PhotoContent = ({
  data: { photo, comments },
  single,
}: PhotoContentProps) => {
  const { userData, newComment } = useContext(UserContext);
  const match = useMedia("64rem");
  const containerSection = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const { current } = containerSection;
    if (current && match) {
      current.scrollTop = current.scrollHeight;
    }
  }, [newComment]);

  return (
    <styles.PhotoContentContainer ref={containerSection} single={single}>
      <styles.ContentImgArea single={single}>
        <ImageLoader src={photo.src} alt={photo.title} />
      </styles.ContentImgArea>
      <styles.ContentDetailsArea single={single}>
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
      <PhotoComments id={photo.id} comments={comments} single={single} />
    </styles.PhotoContentContainer>
  );
};

export default PhotoContent;
