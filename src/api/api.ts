import { APIRequestType, GetImgTypes } from "../types/types";

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

  PHOTO_POST: (body: FormData, token: string): APIRequestType => {
    return {
      url: `${baseURL}/api/photo`,
      options: {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: body,
      },
    };
  },

  PHOTOS_GET: ({ page, total, user }: GetImgTypes): APIRequestType => {
    return {
      url: `${baseURL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  },

  PHOTO_GET: (id: number): APIRequestType => {
    return {
      url: `${baseURL}/api/photo/${id}`,
      options: {
        method: "GET",
        cache: "no-store",
      },
    };
  },

  COMMENT_POST: (body: object, token: string, id: number): APIRequestType => {
    return {
      url: `${baseURL}/api/comment/${id}`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      },
    };
  },

  PHOTO_DELETE: (id: number, token: string): APIRequestType => {
    return {
      url: `${baseURL}/api/photo/${id}`,
      options: {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    };
  },

  PASSWORD_LOST_POST: (body: object): APIRequestType => {
    return {
      url: `${baseURL}/api/password/lost`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  },

  PASSWORD_RESET_POST: (body: object): APIRequestType => {
    return {
      url: `${baseURL}/api/password/reset`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  },

  STATS_GET: (token: string | null): APIRequestType => {
    return {
      url: `${baseURL}/api/stats`,
      options: {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    };
  },
};
