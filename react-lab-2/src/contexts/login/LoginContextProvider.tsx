import { useState, type ReactNode } from "react";
import { LoginContext } from "./LoginContext";

export const LoginContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <LoginContext.Provider value={{ user, setUser, isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
