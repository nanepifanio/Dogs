import * as styles from "./InputStyles";
import { InputProps } from "../../types/types";
import ShowError from "../ShowError";

const Input = ({
  type,
  label,
  id,
  value,
  error,
  onBlur,
  onChange,
  disabled,
}: InputProps) => {
  return (
    <styles.InputStyle>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      <ShowError error={error} />
    </styles.InputStyle>
  );
};

export default Input;
