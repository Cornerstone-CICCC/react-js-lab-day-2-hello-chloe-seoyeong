import { useContext } from "react";
import { LoginContext } from "./LoginContext";

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context)
    throw Error("useLogin mush be used inside  LoginContextProvider");
  return context;
};
