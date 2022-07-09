import { ReactNode } from "react";
import * as styles from "./H1Styles";

type H1Props = {
  title: string;
};

const H1 = ({ title }: H1Props) => {
  return <styles.H1Style>{title}</styles.H1Style>;
};

export default H1;
