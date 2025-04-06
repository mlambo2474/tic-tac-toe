//"light" ===lightmode , "dark" == darkmode
import React from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = ()=>{
    setTheme(theme === "light"? "dark" : "light")
  }
  console.log("theme", theme)
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
  );
};

