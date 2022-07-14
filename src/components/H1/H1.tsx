import { ReactNode } from "react";
import * as styles from "./H1Styles";

type H1Props = {
  title?: string;
  children?: ReactNode;
};

const H1 = ({ title, children }: H1Props) => {
  return <styles.H1Style>{children ?? title}</styles.H1Style>;
};

export default H1;
