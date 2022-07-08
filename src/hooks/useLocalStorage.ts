import { useEffect, useState } from "react";
import { LocalStorage } from "../types/types";

export const useLocalStorage = (key: string, inicial: string): LocalStorage => {
  const [localValue, setLocalValue] = useState<string>(() => {
    const localKeyValue = window.localStorage.getItem(key);
    return localKeyValue ?? inicial;
  });

  const getLocalValue = (key: string): string | null =>
    window.localStorage.getItem(key);

  useEffect(() => {
    window.localStorage.setItem(key, localValue as string);
  }, [key, localValue]);

  return { setLocalValue, getLocalValue };
};
