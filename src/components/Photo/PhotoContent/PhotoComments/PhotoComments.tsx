import * as styles from "./PhotoCommentsStyles";
import { useContext, useLayoutEffect, useRef, useState } from "react";
import { PhotoCommentsTypes } from "../../../../types/types";
import UserContext from "../../../../context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

type PhotoCommentsProps = {
  comments: PhotoCommentsTypes[];
  id: number;
};

const PhotoComments = ({ id, comments }: PhotoCommentsProps) => {
  const [showComments, setShowComments] =
    useState<PhotoCommentsTypes[]>(comments);
  const commentsSection = useRef<HTMLUListElement>(null);
  const { logged } = useContext(UserContext);

  useLayoutEffect(() => {
    const { current } = commentsSection;
    if (current) {
      current.scrollTop = current.scrollHeight;
    }
  }, [showComments]);

  return (
    <>
      <styles.PhotoCommentsUl ref={commentsSection}>
        {showComments.map((comment) => (
          <li key={comment.comment_ID}>
            <strong>{comment.comment_author}: </strong>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </styles.PhotoCommentsUl>
      {logged && <PhotoCommentsForm id={id} showComments={setShowComments} />}
    </>
  );
};

export default PhotoComments;
