import { useState } from "react";
import * as styles from "./ImageLoaderStyles";

type ImageLoaderProps = {
  src: string;
  alt: string;
};

const ImageLoader = ({ src, alt }: ImageLoaderProps) => {
  const [skeleton, setSkeleton] = useState<boolean>(true);

  const handleLoad = (event: any) => {
    setSkeleton(false);
    event.target.style.opacity = 1;
  };

  return (
    <styles.ImageWrapper>
      {skeleton && <styles.ImageSkeleton></styles.ImageSkeleton>}
      <styles.Image src={src} alt={alt} onLoad={handleLoad} />
    </styles.ImageWrapper>
  );
};

export default ImageLoader;
