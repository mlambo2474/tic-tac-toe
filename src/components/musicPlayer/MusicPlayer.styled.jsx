import styled from "styled-components";
import { MdPlayArrow, MdPause,  MdSkipNext } from "react-icons/md";



export const MusicPlayerWrapper = styled.div`
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 100%;
    height: 10vh;
    /* background-color: ${({ theme }) => theme.colors.background}; */
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: ${({ theme }) => theme.boxShadow}; */
    cursor: pointer;
`
export const PlayIcon = styled(MdPlayArrow)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;
`
export const PauseIcon = styled(MdPause )`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;

`

export const NextIcon = styled( MdSkipNext)`
color: ${(props) => props.theme.colors.secondary};
font-size: 3rem;
cursor: pointer;

`