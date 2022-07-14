import * as styles from "./PhotoCommentsFormStyles";
import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../../../../api/api";
import { Send } from "../../../../../assets/SVGComponents/SVGComponents";
import { useFetch } from "../../../../../hooks/useFetch";
import { useLocalStorage } from "../../../../../hooks/useLocalStorage";
import { PhotoCommentsTypes } from "../../../../../types/types";
import ShowError from "../../../../ShowError";

type PhotoCommentsFormProps = {
  id: number;
  showComments: React.Dispatch<React.SetStateAction<PhotoCommentsTypes[]>>;
};

const PhotoCommentsForm = ({ id, showComments }: PhotoCommentsFormProps) => {
  const [comment, setComment] = useState<string>("");
  const { request, error } = useFetch();
  const { getLocalValue } = useLocalStorage();

  const handleComment = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(target.value);
  };

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const { url, options } = api.COMMENT_POST(
      { comment: comment },
      getLocalValue("token") as string,
      id
    );
    const { response, json } = await request(url, options);
    if (response?.ok) {
      setComment("");
      showComments((comments: PhotoCommentsTypes[]) => [
        ...comments,
        { ...(json as PhotoCommentsTypes), comment_content: comment },
      ]);
    }
  };

  return (
    <styles.CommentForm onSubmit={handleSubmit}>
      <styles.CommentTextArea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={handleComment}
      />
      <styles.CommentButton>
        <Send />
      </styles.CommentButton>
      <ShowError error={error} />
    </styles.CommentForm>
  );
};

export default PhotoCommentsForm;
