import { useEffect, useState } from "react";
import FeedModal from "./FeedModal";
import FeedPhotos from "./FeedPhotos";
import { APIPhotosGet } from "../../types/types";

type FeedProps = {
  user: number | string | undefined;
};

const Feed = ({ user }: FeedProps) => {
  const [modalPhoto, setModalPhoto] = useState<APIPhotosGet | null>(null);
  const [page, setPage] = useState<number[]>([1]);
  const [infinite, setInfinite] = useState<boolean>(true);

  useEffect(() => {
    let wait = false;
    const infiniteScroll = () => {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPage((page) => [...page, page.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    };
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {page.map((pg) => (
        <FeedPhotos
          key={pg}
          user={user}
          page={pg}
          changePhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
