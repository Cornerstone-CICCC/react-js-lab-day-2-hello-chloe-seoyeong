import React, { createContext } from "react";

export type LoginContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginContext = createContext<LoginContextType>({
  user: "",
  setUser: () => {},
  isLogin: false,
  setIsLogin: () => {},
});
