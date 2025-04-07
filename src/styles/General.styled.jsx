import styled from "styled-components";

export const Container = styled.div`
   background-color:  ${(props) => props.theme.colors.primary};
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: ${(props) =>props.columBased ? "column" : "row"}; ;
   height : 90vh;
   width: 100vw;
   padding: 0 2rem;
   text-align: center;
   position:fixed;
`
export const Title = styled.h1`
  font-size: 2rem;
  color: ${(props) =>props.primary ? props.primary : props.theme.colors.text};
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  background-color: transparent;
  color: ${(props) => props.primary ? props.primary : props.theme.colors.text};
  margin: 1rem;
  text-align: center;
`
