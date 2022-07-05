import { ReactNode } from "react";
import * as styles from "./ButtonStyle";

type ButtonProps = {
  children: ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <styles.Button>{children}</styles.Button>;
};

export default Button;
