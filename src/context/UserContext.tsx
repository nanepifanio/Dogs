import { createContext, ReactNode, useEffect, useState } from "react";
import { APIUserGet } from "../types/types";
import { api } from "../api/api";
import { useLocalStorage } from "../hooks/useLocalStorage";

type UserContextType = {
  userData: APIUserGet | null;
  userLogin: (username: string,password: string) => any;
  logged: boolean;
  loading: boolean;
  error: string | null;
};

export const UserContext = createContext<UserContextType>({
  userData: null,
  userLogin: (username,password) => Promise<void>,
  logged: false,
  loading: false,
  error: null
});

type UserContextProps = {
  children: ReactNode;
};

export const UserStorage = ({ children }: UserContextProps) => {
  const [userData, setUserData] = useState<APIUserGet | null>(null);
  const [logged,setLogged] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { setLocalValue, getLocalValue } = useLocalStorage("token", "");

  useEffect(() => {
    const autoLogin = async () => {
      if (getLocalValue('token')) {
        const validateResponse = await api.TOKEN_VALIDATE_POST(getLocalValue('token'))
        console.log(validateResponse)
      }
    }
    autoLogin();
  },[])

  const getUser = async (tkn: string | null): Promise<void> => {
    if (tkn) {
      const userResponse = await api.USER_GET(tkn);
      setUserData(userResponse)
      setLogged(true)
    }
  };
  
  const userLogin = async (username: string, password: string): Promise<void> => {
    const { token } = await api.TOKEN_POST(password, username);
    setLocalValue(token);
    getUser(getLocalValue('token'))
  }

  return (
    <UserContext.Provider value={{ userData, userLogin, logged, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
