import { useEffect, useState } from "react";

const useMedia = (width: string): boolean => {
  const [match, setMatch] = useState<boolean>(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(`(max-width: ${width})`);
    media.matches && setMatch(true);
    const screenChange = (event: MediaQueryListEvent): void => {
      event.matches ? setMatch(true) : setMatch(false);
    };
    media.addEventListener("change", screenChange);
    return () => media.removeEventListener("change", screenChange);
  }, []);

  return match;
};

export default useMedia;
