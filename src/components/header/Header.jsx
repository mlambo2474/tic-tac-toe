import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.styled";
import SVGComponent from "../../assets/svgs/SvgComponent";
import { useNavigate } from "react-router";


// import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg?react"

const Header = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    
      <HeaderWrapper>
        {/* <Logo  width={100} height={100} color={red}/> */}
        <SVGComponent width={50} height={50} className="logo" onClick={() => navigate("/")}/>

        <span onClick={() => toggleTheme()}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </span>
      </HeaderWrapper>
  
    
  );
};

export default Header;
