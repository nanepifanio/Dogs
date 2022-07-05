import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, inicial: string) => {
  const [localValue, setLocalValue] = useState<string | null>(() => {
    const localKey = window.localStorage.getItem(key);
    return localKey ?? inicial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, localValue as string);
  }, [key, localValue]);

  return { localValue, setLocalValue };
};
