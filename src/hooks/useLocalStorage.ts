import { useEffect, useState } from "react";
import { LocalStorage } from "../types/types";

export const useLocalStorage = (key: string, inicial: string): LocalStorage => {
  const [localValue, setLocalValue] = useState<string | null>(() => {
    const localKey = window.localStorage.getItem(key);
    return localKey ?? inicial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, localValue as string);
  }, [key, localValue]);

  return { localValue, setLocalValue };
};
