import * as styles from "./FeedStyles";
import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import { APIPhotoGet } from "../../types/types";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<APIPhotoGet | null>(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos changePhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
