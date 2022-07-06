import { ReactNode } from "react";
import * as styles from "./ButtonStyle";

type ButtonProps = {
  children: ReactNode;
  disabled?: boolean;
};

const Button = ({ children, disabled }: ButtonProps) => {
  return <styles.Button disabled={disabled}>{children}</styles.Button>;
};

export default Button;
