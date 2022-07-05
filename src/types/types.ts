export type InputTypes = {
  type: string;
  label: string;
  id: string;
  [key: string]: any;
};

export type FormTypes = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

export type useFormReturn = {
  value: string;
  setValue: (param: string) => void;
  error: string | null;
  onChange: (param: any) => void;
  onBlur: () => boolean | void;
  validate: () => boolean | void;
};

export type APIRequests = {
  endpoint: string /* | {photos: '/api/photo';photos_query:string; photo: string} */;
  method: "GET" | "POST" | "DELETE";
  headers?: {
    "Content-Type"?: "application/json";
    Authorization?: string;
  };
  body?: {
    [key: string]: string;
  };
};

export type useFetchReturn = {
  data: any;
  loading: boolean;
  error: any;
  request: (urlFragment: string, options?: object) => Promise<any>;
};
