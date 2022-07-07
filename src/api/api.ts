import { APITokenPost, APIUserGet, APITokenValidate } from "../types/types";
import axios from "axios";

const baseURL = "https://dogsapi.origamid.dev/json";

export const api = {
  TOKEN_POST: async (
    password: string,
    username: string
  ): Promise<APITokenPost> => {
    return (
      await axios.post(`${baseURL}/jwt-auth/v1/token`, { password, username })
    ).data;
  },

  USER_GET: async (token: string | null): Promise<APIUserGet> => {
    return (
      await axios.get(`${baseURL}/api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;
  },

  TOKEN_VALIDATE_POST: async (
    token: string | null
  ): Promise<APITokenValidate> => {
    return (
      await axios.post(`${baseURL}/jwt-auth/v1/token/validate`, null, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data;
  },
};
