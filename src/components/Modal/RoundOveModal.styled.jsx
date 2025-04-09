import styled from "styled-components";


export const ModalTitle = styled.h1`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const ModalSubTitle = styled.h2`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  margin: 1rem;
  text-align: center;
  `;