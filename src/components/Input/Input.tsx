import * as styles from "./InputStyles";
import { InputProps } from "../../types/types";

const Input = ({
  type,
  label,
  id,
  value,
  error,
  onBlur,
  onChange,
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
      />
      {error && <p>{error}</p>}
    </styles.InputStyle>
  );
};

export default Input;
