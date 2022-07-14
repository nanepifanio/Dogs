import * as styles from "./FeedStyles";
import { useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import { APIPhotosGet } from "../../types/types";

const Feed = () => {
  const [modalPhoto, setModalPhoto] = useState<APIPhotosGet | null>(null);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      <FeedPhotos changePhoto={setModalPhoto} />
    </div>
  );
};

export default Feed;
