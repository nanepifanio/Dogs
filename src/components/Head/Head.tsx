import { useEffect } from "react";

type HeadProps = {
  title?: string;
  description?: string;
};

const Head = ({ title, description }: HeadProps) => {
  useEffect(() => {
    document.title = title + " | Dogs";
    description &&
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", description);
  }, [title]);

  return <></>;
};

export default Head;
