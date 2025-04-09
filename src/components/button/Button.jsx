import React from "react";
import { ButtonWrapper } from "./Button.styled";
import { useContext } from "react";

const Button = (props) => {


  return <ButtonWrapper {...props}  >{props.children}</ButtonWrapper>;
};

export default Button;
