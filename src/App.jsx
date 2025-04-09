import React, { useContext } from "react";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import Router from "./Router";
import "./App.css";
import { lightTheme } from "./styles/theme";
import { darkTheme } from "./styles/theme";
import { ThemeContext } from "./context/ThemeContext";
// import { ModalContextProvider } from "./context/ModalContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  console.log("theme >>>", theme);
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
