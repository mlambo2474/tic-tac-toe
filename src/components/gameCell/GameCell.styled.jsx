import styled from "styled-components";

export const CellStyle = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "isWinningCell", // Prevent isWinningCell from being forwarded
  })` background-color: ${(props) =>
    props.isWinningCell
      ? props.theme.colors.purple
      : props.theme.colors.secondary};
  height: 6.5rem;
  width: 6.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 7px ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  padding: 1rem;

  .markedItem {
    path {
      fill: ${(props) => props.theme.colors.primary};
    }
  }

  .OutlineIcon {
    path {
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }
  &:hover {
    .OutlineIcon {
      path {
        stroke-width: 2;
      }
    }
  }
`;

// export const CellStyle = styled.button`
//   background-color: ${(props) => props.isWinningCell ? props.theme.colors.yellow : props.theme.colors.secondary};
//   color: ${(props) => props.theme.colors.primary};
//   font-size: 3rem;
//   border: none;
//   width: 10rem;
//   height: 10rem;
//   border-radius: 2.5rem;
//   box-shadow: 5px 10px ${(props) => props.theme.colors.cream};
//   cursor: pointer;
//   padding: 3rem;

//   .markedItem {
//       path {
//         fill: ${(props) => props.theme.colors.primary};
//       }
//   }
//   .outlineIcon {
//     path {
//       stroke: ${(props) => props.theme.colors.primary};
//       stroke-width: 0;
//     }
//   }

//   &:hover {
//     .outlineIcon {
//       path {
//         stroke-width: 2;
//       }
//     }
//   }
