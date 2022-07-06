import { useFormReturn, APIPostResponse } from "../types/types";
import axios from "axios";

const https = axios.create({
  baseURL: "https://dogsapi.origamid.dev/json",
});

export const api = {
  TOKEN_POST: async (
    password: string,
    username: string
  ): Promise<APIPostResponse> => {
    return (await https.post("/jwt-auth/v1/token", { password, username }))
      .data;
  },
};
