import styled from "styled-components"

export const CellStyle = styled.button`
    background-color:${(props) => props.theme.colors.secondary} ;
    color: ${(props) => props.theme.colors.primary}  ;
    height:6.5rem ;
    width: 6.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 7px ${(props) => props.theme.colors.gray};
    cursor: pointer;
    padding: 1rem;


    .OutlineIcon{
        path{
            stroke: ${(props) => props.theme.colors.primary} ;
            stroke-width: 3;
        }
    }
`