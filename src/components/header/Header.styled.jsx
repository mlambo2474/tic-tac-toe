import styled from "styled-components";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  height: 15vh;

  .logo {
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;
export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;
export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2rem;
  cursor: pointer;
`;
