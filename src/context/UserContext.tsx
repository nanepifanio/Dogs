import { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { APITokenPost, APIUserGet  } from "../types/types";
import { api } from "../api/api";


type UserContextType = {
  userData: APIUserGet | null;
  userLogin: (username: string,password: string) => any;
  userLogout: () => void;
  logged: boolean;
  loading: boolean;
  error: string | null;
};

export const UserContext = createContext<UserContextType>({
  userData: null,
  userLogin: (username,password) => Promise<void>,
  userLogout: () => null,
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

  const userLogout = useCallback(() => {
    setUserData(null)
    setLoading(false)
    setError(null)
    setLogged(false)
    window.localStorage.removeItem('token')
  },[])


  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        const {url,options} = api.TOKEN_VALIDATE_POST(token)
        try {
          setError(null)
          setLoading(true)
          const response = await fetch(url,options)
          if (!response.ok) throw new Error("Token Inválido!");
          await getUser(token)
        } catch (err) {
          userLogout()
          setError((err as Error).message)
        } finally {
          setLoading(false)
          setLogged(true)
        }
      }
    }
    autoLogin();
  },[userLogout]) 

  const getUser = async (tkn: string | null): Promise<void> => {
    const {url,options} = api.USER_GET(tkn)
    const response = await fetch(url,options)
    const json: APIUserGet = await response.json()
    setUserData(json)
    setLogged(true)
  };
  
  const userLogin = async (username: string, password: string): Promise<void> => {
    const {url,options} = api.TOKEN_POST({username, password})
    let json: APITokenPost;
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(url,options)
      if (!response.ok) throw new Error("Usuário ou Senha inválidos!");
      json = await response.json()
      window.localStorage.setItem('token', json.token); 
      await getUser(json.token)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }


  return (
    <UserContext.Provider value={{ userData, userLogin, userLogout, logged, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
