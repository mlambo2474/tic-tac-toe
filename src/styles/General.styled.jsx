import styled from "styled-components";

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "columnBased", // Prevent columnBased from being forwarded
})`
   background-color:  ${(props) => props.theme.colors.primary};
   flex-direction: ${({columnBased}) => (columnBased? "column" : "row") };
   display: flex;
   justify-content: center;
   align-items: center;
   height : 80vh;
   width: 100vw;
   padding: 0 2rem;
   text-align: center;

   
   ${(props) => props.theme.media.mobile}{
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
`

export const Title = styled.h1`
  font-size: 4rem;
  color: ${(props) =>props.theme.colors.text};
  font-family: "Pacifico", cursive;
  background-color: transparent;
  
  ${(props) => props.theme.media.mobile} {
    font-size: 5rem;
  }


`;

export const Subtitle = styled.h2`
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  background-color: transparent;
  color: ${(props) => props.theme.colors.text};
  margin: 1rem;
  text-align: center;
  ${(props) => props.theme.media.mobile} {
    font-size: 2.5rem;
  }


`

export const Text = styled.p`
  font-size: 1.2rem;
  font-family: "Poppins", sans-serif;
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  padding:10px ;
  font-weight: 200;
`