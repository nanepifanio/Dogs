import { useCallback, useState } from "react";
import { UseFetchReturn } from "../types/types";

const baseUrl = "https://dogsapi.origamid.dev/json";

export const useFetch = (): UseFetchReturn => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async (urlFragment: string, options?: object) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(baseUrl + urlFragment, options);
      json = await response.json();
      if (!response.ok) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError((err as Error).message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  return { data, loading, error, request };
};
