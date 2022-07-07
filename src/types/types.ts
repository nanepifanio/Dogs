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
  error: any;
  request: (urlFragment: string, options?: object) => Promise<any>;
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
