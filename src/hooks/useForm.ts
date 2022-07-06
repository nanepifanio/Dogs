import { ChangeEvent, useState } from "react";
import { FormTypes } from "../types/types";
import { useFormReturn } from "../types/types";

const types: FormTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Digite um Email válido",
  },
  password: {
    regex: /\w{3,}/ /* /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}/ */,
    message: "A senha deve conter no mínimo 3 caracteres",
  },
};

export const useForm = (
  typeSubmited: string /* | boolean para inputs não requisitados */
): useFormReturn => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string): boolean | void => {
    // if ((type as boolean) === false) return true; para inputs não requisitados
    if (value.length === 0) {
      setError("Preencha o campo.");
      return false;
    } else if (types[typeSubmited] && !types[typeSubmited].regex.test(value)) {
      setError(types[typeSubmited].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    error,
    onChange,
    typeSubmited,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};
