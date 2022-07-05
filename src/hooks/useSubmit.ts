import { useFormReturn } from "../types/types";
import { useFetch } from "./useFetch";
import { APIRequests } from "../types/types";

export const useSubmit = (
  values: useFormReturn[],
  { endpoint, method, headers, body }: APIRequests
) => {
  const { data, loading, error, request } = useFetch();

  const submit = async () => {
    if (values.every((value) => value.validate())) {
      const { response, json } = await request(endpoint, {
        method,
        headers,
        body,
      });
      console.log(response, json);
    } else {
      console.log("não enviou");
      values.forEach((value) => {
        console.log(value.validate());
        console.log(value.value);
      });
    }
  };

  return {
    data,
    loading,
    error,
    submit,
  };
};
