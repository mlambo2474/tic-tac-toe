import { PiDropSimpleBold } from "react-icons/pi";
import styled from "styled-components";


export const PlayerWrapper = styled.div`
display: flex;
flex-direction: column;
/* flex-direction: row; */
justify-content: center;
align-items: center;
margin: 2rem;
/* background-color: ${({isPlayerActive}) => isPlayerActive ? "yellow" :  "gray"}; */
font-size: 20px;
padding:1rem;
border-radius: 1rem;

${(props) => props.theme.media.mobile}{
    flex-direction: row;
    /* justify-content: center;
    align-items: center; */
   }
  

`
// export const AvatarWrapper = styled.div`
export const AvatarWrapper = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== "isPlayerActive", // Prevent columnBased from being forwarded
  })`
    div{
        display: flex;
        width: 10rem;
        height: 10rem;
        filter: ${(props) => props.isPlayerActive ?  "" :'grayscale(100%)'}




    }`

