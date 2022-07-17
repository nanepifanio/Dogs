// inputs types

export type InputProps = {
  type: string;
  label: string;
  id: string;
  [key: string]: any;
};

export type InputTypes = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

// custom hook types

export type UseFormReturn = {
  value: string;
  setValue: (param: string) => void;
  error: string | null;
  typeSubmited: string;
  onChange: (param: any) => void;
  onBlur: () => boolean | void;
  validate: () => boolean | void;
};

export type UseFetchReturn = {
  data: any;
  loading: boolean;
  setLoading: (param: boolean) => void;
  error: any;
  setError: (param: string | null) => void;
  request: (
    url: string,
    options?: object,
    er?: string
  ) => Promise<{ response: Response | undefined; json: any }>;
};

export type LocalStorage = {
  setLocalValue: (param: string) => void;
  getLocalValue: (param: string) => string | null;
};

// api response types

export type APITokenPost = {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string;
};

export type APIUserGet = {
  email: string;
  id: number;
  nome: string;
  username: string;
};

export type APITokenValidate = {
  code: string;
  data: {
    status: number;
  };
};

export type APIPhotosGet = {
  id: number;
  author: string;
  title: string;
  date: string;
  src: string;
  acessos: number;
  idade: string;
  peso: string;
  total_coments: string;
};

export type PhotoCommentsTypes = {
  comment_ID: string;
  comment_agent: string;
  comment_approved: string;
  comment_author: string;
  comment_author_IP: string;
  comment_author_email: string;
  comment_author_url: string;
  comment_content: string;
  comment_date: string;
  comment_date_gmt: string;
  comment_karma: string;
  comment_parent: string;
  comment_post_ID: string;
  comment_type: string;
  user_id: string;
};

export type APIPhotoGet = {
  comments: PhotoCommentsTypes[];
  photo: APIPhotosGet;
};

export type APIStatsGet = {
  id: number;
  title: string;
  acessos: string;
};

export type APIRequestType = {
  url: string;
  options: {
    method: "POST" | "GET" | "DELETE";
    cache?: "no-store";
    headers?: {
      "Content-Type"?: "application/json";
      Authorization?: string;
    };
    body?: string | FormData;
  };
};

// post img types

export type PostImgTypes = {
  preview: string;
  raw: File;
};

// get img types

export type GetImgTypes = {
  page: number;
  total: number;
  user: string | number;
};
