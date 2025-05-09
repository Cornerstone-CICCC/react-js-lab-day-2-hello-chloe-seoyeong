import { createContext } from "react";

export type ThemeContextProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: false,
  setIsDark: () => {},
});
