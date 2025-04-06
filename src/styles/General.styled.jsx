import styled from "styled-components";

export const Container = styled.div`
   background-color:  ${(props) => props.theme.colors.primary};
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   height : 90vh;
   width: 100vw;
   padding: 0 2rem;
   text-align: center;
   position:fixed;


`

export const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.text};
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
`;
