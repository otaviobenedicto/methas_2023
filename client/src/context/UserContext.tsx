import React, { createContext } from "react";
import { ReactNode } from "react";

import useAuth from "../hooks/useAuth";

export interface IContext {
  loading: boolean,
  authenticated: boolean,
  register: (user: {
    firstName: string,
    lastName: string,
    email:string,
    password:string,
    passwordConfirmation:string
  }) => Promise<void>,
  login: (user: {
    email: string,
    password: string
  }) => Promise<void>,
  logout: () => void,
}

type IUserContextProvider = {
  children?: ReactNode
}

const Context = createContext({} as IContext);

function UserProvider({ children }: IUserContextProvider) {

  const { authenticated, loading, register, login, logout } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, register, login, logout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };