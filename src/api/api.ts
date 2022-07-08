import { APIRequestType } from "../types/types";

const baseURL = "https://dogsapi.origamid.dev/json";

export const api = {
  TOKEN_POST: (body: object): APIRequestType => {
    return {
      url: `${baseURL}/jwt-auth/v1/token`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  },

  USER_GET: (token: string | null): APIRequestType => {
    return {
      url: `${baseURL}/api/user`,
      options: {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    };
  },

  TOKEN_VALIDATE_POST: (token: string | null): APIRequestType => {
    return {
      url: `${baseURL}/jwt-auth/v1/token/validate`,
      options: {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    };
  },

  USER_POST: (body: object): APIRequestType => {
    return {
      url: `${baseURL}/api/user`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  },
};
