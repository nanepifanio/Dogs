import { useCallback, useState } from "react";
import { UseFetchReturn } from "../types/types";

export const useFetch = (): UseFetchReturn => {
  // const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(
    async (url: string, options?: object, er?: string) => {
      let response;
      let json;
      try {
        setError(null);
        setLoading(true);
        response = await fetch(url, options);
        console.log(response);
        if (!response.ok) throw new Error(er);
        json = await response.json();
      } catch (err) {
        json = null;
        setError((err as Error).message);
      } finally {
        // setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return { /* data, */ loading, setLoading, error, setError, request };
};
