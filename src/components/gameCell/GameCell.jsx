import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../context/GameContext";
import { CheckForwinner } from "../../Utils";
import IconX from "../../assets/svgs/iconX";
import IconO from "../../assets/svgs/iconO";
import XIconOutline from "../../assets/svgs/iconXOutline";
import OIconOutline from "../../assets/svgs/iconOOutline";
import { ModalContext } from "../../context/ModalContext";
import RoundOverModal from "../Modal/RoundOverModal";

const GameCell = ({ cellItem, index }) => {
  const { updateBoard, gameState } = useContext(GameContext);
 const {handleModal} = useContext(ModalContext);

  const cellClickHandler = () => {
    updateBoard(index);
    const result = CheckForwinner(gameState.board);
    if(result){
      handleModal(<RoundOverModal />)
    }
  };
  if (cellItem === "x") {
    return (
      <CellStyle>
        <IconX />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle>
        <IconO />
      </CellStyle>
    );
  }
  return (
    <CellStyle onClick={cellClickHandler}>
      {gameState.turn === "x" ? <XIconOutline  className="OutlineIcon"/> : <OIconOutline   className="OutlineIcon"/>}
    </CellStyle>
  );
};

export default GameCell;
