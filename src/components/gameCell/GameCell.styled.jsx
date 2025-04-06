import styled from "styled-components"

export const CellStyle = styled.button`
    background-color:${(props) => props.theme.colors.secondary} ;
    color: ${(props) => props.theme.colors.primary}  ;
    height:6.5rem ;
    width: 6.5rem;
    font-size: 3rem;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 7px ${(props) => props.theme.colors.gray};
    cursor: pointer;
`